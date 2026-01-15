import express from "express";
import { imageController } from "../controllers/image.controller.js";
import { uploadMemory } from "../common/multer/memory.multer.js";
import { protect } from "../common/middleware/protect.middleware.js";
const imageRouter = express.Router();

// Tạo route CRUD
imageRouter.post(
  "/",
  protect,
  uploadMemory.single("image"),
  imageController.createImage
);
imageRouter.get("/", imageController.getAllImages);
imageRouter.get("/search", imageController.searchImage);
imageRouter.get("/:image_id", imageController.getImageById);
imageRouter.get(
  "/user/:userId/created",
  imageController.getCreatedImagesByUser
);
imageRouter.get("/user/:userId/saved", imageController.getSavedImagesByUser);
imageRouter.put("/:image_id", protect, imageController.updateImage);
imageRouter.delete("/:image_id", protect, imageController.removeImage);

export default imageRouter;
