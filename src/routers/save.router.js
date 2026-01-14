import express from "express";
import { protect } from "../common/middleware/protect.middleware.js";
import { saveController } from "../controllers/save.controller.js";

const saveRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Save Images
 *   description: API quản lý lưu/huỷ lưu hình ảnh
 */

/**
 * @swagger
 * /save/{imageId}:
 *   post:
 *     summary: Lưu hình ảnh cho user hiện tại
 *     tags: [Save Images]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: imageId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Saved successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Image not found
 */
saveRouter.post("/:imageId", protect, saveController.saveImage); // body: { imageId }
/**
 * @swagger
 * /save/{imageId}:
 *   delete:
 *     summary: Huỷ lưu hình ảnh
 *     tags: [Save Images]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: imageId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Unsave successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Image not found
 */
saveRouter.delete("/:imageId", protect, saveController.unsave); // huỷ lưu
/**
 * @swagger
 * /save/check/{imageId}:
 *   get:
 *     summary: Kiểm tra hình ảnh đã được lưu hay chưa
 *     tags: [Save Images]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: imageId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Check result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 saved:
 *                   type: boolean
 *                   example: true
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Image not found
 */
saveRouter.get("/check/:imageId", protect, saveController.checkSavedOrNot);

export default saveRouter;
