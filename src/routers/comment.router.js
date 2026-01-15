import express from "express";
import { protect } from "../common/middleware/protect.middleware.js";
import { commentController } from "../controllers/comment.controller.js";

const commentRouter = express.Router();

// Tạo route CRUD
commentRouter.post("/", protect, commentController.createComment);
commentRouter.get("/image/:imageId", commentController.findCommentsByImage);
commentRouter.put("/:comment_id", protect, commentController.updateComment);
commentRouter.delete("/:comment_id", protect, commentController.removeComment);

export default commentRouter;
