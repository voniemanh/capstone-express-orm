import express from "express";
import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";
import { userController } from "../controllers/user.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import { uploadMemory } from "../common/multer/memory.multer.js";

const userRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: User
 *   description: API quản lý người dùng
 */

/**
 * @swagger
 * /user/me:
 *   get:
 *     summary: Lấy thông tin user hiện tại
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Thông tin user hiện tại
 */
userRouter.get("/me", protect, userController.getMe);
/**
 * @swagger
 * /user/me:
 *   put:
 *     summary: Cập nhật thông tin user hiện tại
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               age:
 *                 type: integer
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User cập nhật thành công
 */
userRouter.put("/me", protect, userController.updateMe);
/**
 * @swagger
 * /user/me:
 *   delete:
 *     summary: Xoá tài khoản user hiện tại
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Xoá tài khoản thành công
 */
userRouter.delete("/me", protect, userController.deleteMe);
/**
 * @swagger
 * /user/avatar-local:
 *   post:
 *     summary: Upload avatar local
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Upload avatar local thành công
 */
userRouter.post(
  "/avatar-local",
  protect,
  uploadDiskStorage.single("avatar"),
  userController.avatarLocal
);
/**
 * @swagger
 * /user/avatar-cloud:
 *   post:
 *     summary: Upload avatar cloud
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Upload avatar cloud thành công
 */
userRouter.post(
  "/avatar-cloud",
  protect,
  uploadMemory.single("avatar"),
  userController.avatarCloud
);

export default userRouter;
