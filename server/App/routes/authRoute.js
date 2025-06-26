const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");
const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/logout", auth, authController.logout);
authRouter.get("/refresh", authController.refresh);

module.exports = authRouter;
