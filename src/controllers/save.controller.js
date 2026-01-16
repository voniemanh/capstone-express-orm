import { saveService } from "../services/save.service.js";
import { responseSuccess } from "../common/helpers/function.helper.js";

export const saveController = {
  async saveImage(req, res, next) {
    try {
      const imageId =
        req.query.imageId || req.params.imageId || req.body.imageId;
      const userId = +req.user.user_id;
      const result = await saveService.saveImage(userId, Number(imageId));
      const response = responseSuccess(result, `Save image successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async unsave(req, res, next) {
    try {
      const imageId =
        req.query.imageId || req.params.imageId || req.body.imageId;
      const userId = +req.user.user_id;
      const result = await saveService.unsave(userId, Number(imageId));
      const response = responseSuccess(result, `Unsave successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async checkSavedOrNot(req, res, next) {
    try {
      const { imageId } = req.params;
      const userId = +req.user.user_id;
      const result = await saveService.checkSavedOrNot(userId, Number(imageId));
      const response = responseSuccess(
        result,
        `Check saved status for image #${imageId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
