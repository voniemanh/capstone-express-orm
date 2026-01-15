import express from "express";
import { protect } from "../common/middleware/protect.middleware.js";
import { saveController } from "../controllers/save.controller.js";

const saveRouter = express.Router();
saveRouter.post("/:imageId", protect, saveController.saveImage); // body: { imageId }
saveRouter.delete("/:imageId", protect, saveController.unsave); // huỷ lưu
saveRouter.get("/check/:imageId", protect, saveController.checkSavedOrNot);

export default saveRouter;
