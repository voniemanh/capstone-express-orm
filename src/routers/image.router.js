import express from "express";
import { imageController } from "../controllers/image.controller.js";
import { uploadMemory } from "../common/multer/memory.multer.js";
import { protect } from "../common/middleware/protect.middleware.js";
const imageRouter = express.Router();

// Tạo route CRUD
/**
 * @swagger
 * tags:
 *   name: Images
 *   description: API quản lý hình ảnh
 */

/**
 * @swagger
 * /images:
 *   post:
 *     summary: Tạo ảnh mới
 *     tags: [Images]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *               - image_name
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               image_name:
 *                 type: string
 *               image_description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tạo ảnh thành công
 *       401:
 *         description: Chưa đăng nhập
 */
imageRouter.post(
  "/",
  protect,
  uploadMemory.single("image"),
  imageController.createImage
);
/**
 * @swagger
 * /images:
 *   get:
 *     summary: Lấy danh sách tất cả ảnh
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: Lấy danh sách ảnh thành công
 */
imageRouter.get("/", imageController.getAllImages);
/**
 * @swagger
 * /images/search:
 *   get:
 *     summary: Tìm kiếm ảnh theo từ khoá
 *     tags: [Images]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         example: "mèo"
 *     responses:
 *       200:
 *         description: Danh sách ảnh phù hợp
 */
imageRouter.get("/search", imageController.searchImage);
/**
 * @swagger
 * /images/{image_id}:
 *   get:
 *     summary: Lấy chi tiết ảnh theo ID
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: image_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Lấy thông tin ảnh thành công
 *       404:
 *         description: Không tìm thấy ảnh
 */
imageRouter.get("/:image_id", imageController.getImageById);
/**
 * @swagger
 * /images/user/{userId}/created:
 *   get:
 *     summary: Lấy danh sách ảnh do user tạo
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2
 *     responses:
 *       200:
 *         description: Danh sách ảnh user đã tạo
 */
imageRouter.get(
  "/user/:userId/created",
  imageController.getCreatedImagesByUser
);
/**
 * @swagger
 * /images/user/{userId}/saved:
 *   get:
 *     summary: Lấy danh sách ảnh user đã lưu
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2
 *     responses:
 *       200:
 *         description: Danh sách ảnh user đã lưu
 */
imageRouter.get("/user/:userId/saved", imageController.getSavedImagesByUser);
/**
 * @swagger
 * /images/{image_id}:
 *   put:
 *     summary: Update ảnh
 *     tags: [Images]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - image_url
 *             properties:
 *               image_url:
 *                 type: string
 *                 example: "https://example.com/cat.png"
 *               image_name:
 *                 type: string
 *                 example: "Con mèo béo ú"
 *               image_description:
 *                 type: string
 *                 example: "Ảnh mèo dễ thương"
 *     responses:
 *       200:
 *         description: Update ảnh thành công
 *       401:
 *         description: Chưa đăng nhập
 *       404:
 *         description: Không tìm thấy ảnh
 */
imageRouter.put("/:image_id", protect, imageController.updateImage);

/**
 * @swagger
 * /images/{image_id}:
 *   delete:
 *     summary: Xoá ảnh theo ID
 *     tags: [Images]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: image_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Xoá ảnh thành công
 *       401:
 *         description: Chưa đăng nhập
 *       404:
 *         description: Không tìm thấy ảnh
 */
imageRouter.delete("/:image_id", protect, imageController.removeImage);

export default imageRouter;
