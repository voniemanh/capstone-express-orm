import express from "express";
import { authController } from "../controllers/auth.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import passport from "passport";

const authRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API xác thực người dùng
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Đăng ký tài khoản mới
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               fullName:
 *                 type: string
 *                 example: Bé Mèo
 *     responses:
 *       200:
 *         description: Đăng ký thành công
 */
authRouter.post("/register", authController.register);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Đăng nhập hệ thống
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Đăng nhập thành công, trả về access token và refresh token
 */
authRouter.post("/login", authController.login);
/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Đăng nhập bằng Google
 *     tags: [Auth]
 *     description: Redirect người dùng sang trang đăng nhập Google
 *     responses:
 *       302:
 *         description: Redirect tới Google OAuth
 */
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
// Passport sẽ lấy code và xử lý với bên google => lấy thông tin gmail => kích hoạt hàm verify ở trong src/common/passport/login-google.passport.js
/**
 * @swagger
 * /auth/google-callback:
 *   get:
 *     summary: Callback sau khi đăng nhập Google
 *     tags: [Auth]
 *     description: Google redirect về endpoint này sau khi user xác thực thành công
 *     responses:
 *       200:
 *         description: Đăng nhập Google thành công
 *       302:
 *         description: Đăng nhập thất bại, redirect về /login
 */
authRouter.get(
  "/google-callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  authController.googleCallback
);
/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Làm mới access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: Tạo access token mới thành công
 */
authRouter.post("/refresh-token", authController.refreshToken);

export default authRouter;
