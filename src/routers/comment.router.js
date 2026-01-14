import express from "express";
import { protect } from "../common/middleware/protect.middleware.js";
import { commentController } from "../controllers/comment.controller.js";

const commentRouter = express.Router();

// Tạo route CRUD
/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: API quản lý bình luận
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Tạo comment mới
 *     tags: [Comments]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - imageId
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Ảnh này dễ thương ghê"
 *               imageId:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Tạo comment thành công
 *       401:
 *         description: Chưa đăng nhập
 */
commentRouter.post("/", protect, commentController.createComment);
/**
 * @swagger
 * /comments/image/{imageId}:
 *   get:
 *     summary: Lấy danh sách comment theo image
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: imageId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 5
 *     responses:
 *       200:
 *         description: Lấy danh sách comment thành công
 *       404:
 *         description: Không tìm thấy image hoặc image không có comment nào
 */
commentRouter.get("/image/:imageId", commentController.findCommentsByImage);
/**
 * @swagger
 * /comments/{comment_id}:
 *   put:
 *     summary: Cập nhật comment
 *     tags: [Comments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: comment_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Sửa lại cho hay hơn nè"
 *     responses:
 *       200:
 *         description: Update comment thành công
 *       401:
 *         description: Chưa đăng nhập
 */
commentRouter.put("/:comment_id", protect, commentController.updateComment);
/**
 * @swagger
 * /comments/{comment_id}:
 *   delete:
 *     summary: Xoá comment
 *     tags: [Comments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: comment_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3
 *     responses:
 *       200:
 *         description: Xoá comment thành công
 *       401:
 *         description: Chưa đăng nhập
 */
commentRouter.delete("/:comment_id", protect, commentController.removeComment);

export default commentRouter;
