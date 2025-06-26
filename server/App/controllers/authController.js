const Joi = require("joi");
const bcrypt = require("bcryptjs");
const authModel = require("../models/authModel");
const AuthDto = require("../../dto/authDto");
const JWTService = require("../../services/JWTService");
const refreshTokenModel = require("../models/token");
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const authController = {
  // Register
  async register(req, res, next) {
    const userRegisterSchema = Joi.object({
      name: Joi.string().max(30).required(),
      username: Joi.string().min(5).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(passwordPattern).required(),
      confirmPassword: Joi.ref("password"),
    });

    const { error } = userRegisterSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const { name, username, email, password } = req.body;

    try {
      const usernameInUse = await authModel.exists({ username });
      const emailInUse = await authModel.exists({ email });

      if (usernameInUse) {
        const error = {
          status: 409,
          message: "username not available, use another username!",
        };
        return next(error);
      }
      if (emailInUse) {
        const error = {
          status: 409,
          message: "email already exist, choose another email!",
        };
        return next(error);
      }
    } catch (error) {
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const registerObj = new authModel({
        name,
        username,
        email,
        password: hashedPassword,
      });
      const registerUser = await registerObj.save();

      const accessToken = JWTService.signAccessToken(
        {
          _id: registerUser._id,
        },
        "30m"
      );
      const refreshToken = JWTService.signRefreshToken(
        { _id: registerUser._id },
        "60m"
      );

      // Store refresh token in db
      await JWTService.storeRefreshToken(refreshToken, registerUser._id);

      // send token in cookies
      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });
      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });

      const registerDto = new AuthDto(registerUser);
      return res.status(201).json({
        message: "User registered successfully!",
        response: registerDto,
        auth: true,
      });
    } catch (error) {
      return next(error);
    }
  },

  // Login
  async login(req, res, next) {
    const userLoginSchema = Joi.object({
      username: Joi.string().min(5).max(30).required(),
      password: Joi.string().pattern(passwordPattern).required(),
    });

    const { error } = userLoginSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    const { username, password } = req.body;
    let user;
    try {
      user = await authModel.findOne({ username });
      if (!user) {
        const error = {
          status: 401,
          message: "Invalid username!",
        };
        return next(error);
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        const error = {
          status: 401,
          message: "Invalid password!",
        };
        return next(error);
      }
    } catch (error) {
      return next(error);
    }

    const accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");
    const refreshToken = JWTService.signRefreshToken({ _id: user._id }, "60m");

    // update refresh token in database
    try {
      await refreshTokenModel.updateOne(
        { _id: user._id },
        { token: refreshToken },
        { upsert: true }
      );
    } catch (error) {
      return next(error);
    }

    // send cookie
    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });

    const loginDto = new AuthDto(user);

    return res.status(200).json({
      message: "User login successfully!",
      response: loginDto,
      auth: true,
    });
  },

  // Logout
  async logout(req, res, next) {
    // 1. Delete refresh token from database
    const { refreshToken } = req.cookies;
    try {
      await refreshTokenModel.deleteOne({
        token: refreshToken,
      });
    } catch (error) {
      return next(error);
    }

    // 2. delete cookies
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    // 3. send response
    return res.status(200).json({
      message: "User Logout successfully!",
      user: null,
      auth: false,
    });
  },

  // Refresh
  async refresh(req, res, next) {
    // 1. get refreshToken from cookies
    const originalRefreshToken = req.cookies.refreshToken;

    // 2. verify refreshToken
    let id;
    try {
      id = JWTService.verifyRefreshToken(originalRefreshToken)._id;
    } catch (e) {
      const error = {
        status: 401,
        message: "Unauthorized",
      };
      return next(error);
    }

    try {
      const match = await refreshTokenModel({
        _id: id,
        token: originalRefreshToken,
      });
      if (!match) {
        const error = {
          status: 401,
          message: "Unauthorized",
        };
        return next(error);
      }
    } catch (e) {
      return next(e);
    }

    // 3. generate new tokens
    try {
      const accessToken = JWTService.signAccessToken({ _id: id }, "30m");
      const refreshToken = JWTService.signRefreshToken({ _id: id }, "60m");

      // 4. update db
      await refreshTokenModel.updateOne({ _id: id }, { token: refreshToken });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });
    } catch (e) {
      return next(e);
    }

    // 5. return response
    const user = await authModel.findOne({ _id: id });
    const userDto = new AuthDto(user);
    return res.status(200).json({
      message: "Token refreshed successfully!",
      user: userDto,
      auth: true,
    });
  },
};

module.exports = authController;
