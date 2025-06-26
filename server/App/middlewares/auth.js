const AuthDto = require("../../dto/authDto");
const JWTService = require("../../services/JWTService");
const authModel = require("../models/authModel");

const auth = async (req, res, next) => {
  try {
      const { accessToken, refreshToken } = req.cookies;

    if (!accessToken || !refreshToken) {
      const error = {
        status: 401,
        message: "Unauthorized",
      };
      return next(error);
    }

    let _id;
    try {
      _id = JWTService.verifyAccessToken(accessToken);
    } catch (error) {
      return next(error);
    }

    let user;
    try {
      user = await authModel.findOne({ _id: _id });
    } catch (error) {
      return next(error);
    }

    const userDto = new AuthDto(user);
    req.user = userDto;

    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = auth;
