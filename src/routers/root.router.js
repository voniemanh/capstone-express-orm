import express from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import imageRouter from "./image.router.js";
import saveRouter from "./save.router.js";
import commentRouter from "./comment.router.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/images", imageRouter);
rootRouter.use("/comments", commentRouter);
rootRouter.use("/save", saveRouter);
export default rootRouter;
