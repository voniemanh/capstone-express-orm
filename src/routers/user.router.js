import express from "express";
import { userController } from "../controllers/user.controller.js";
import { protect } from "../common/middleware/protect.middleware.js";
import { uploadMemory } from "../common/multer/memory.multer.js";

const userRouter = express.Router();

userRouter.get("/me", protect, userController.getMe);
userRouter.put("/me", protect, userController.updateMe);
userRouter.delete("/me", protect, userController.deleteMe);
userRouter.post(
  "/avatar-cloud",
  protect,
  uploadMemory.single("avatar"),
  userController.avatarCloud
);

export default userRouter;
