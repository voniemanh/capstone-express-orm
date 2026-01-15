import express from "express";
import { authController } from "../controllers/auth.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import passport from "passport";

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
authRouter.get(
  "/google-callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  authController.googleCallback
);
authRouter.post("/refresh-token", authController.refreshToken);

export default authRouter;
