import { responseSuccess } from "../common/helpers/function.helper.js";
import { imageService } from "../services/image.service.js";

export const imageController = {
  async createImage(req, res, next) {
    try {
      const userId = req.user.user_id;
      const result = await imageService.createImage(req, userId);

      const response = responseSuccess(result, "Create image successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async updateImage(req, res, next) {
    try {
      const userId = req.user.user_id;
      const data = req.body;
      const { image_id } = req.params;
      console.log(data, userId, { image_id });

      const result = await imageService.updateImage(data, userId, { image_id });

      const response = responseSuccess(result, "Update image successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async getAllImages(req, res, next) {
    try {
      const query = req.query;

      const result = await imageService.getAllImages(query);

      const response = responseSuccess(result, "Get all images successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async getImageById(req, res, next) {
    try {
      const { image_id } = req.params;

      const result = await imageService.getImageById(image_id);

      const response = responseSuccess(
        result,
        `Get image #${image_id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async getCreatedImagesByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const query = req.query;

      const result = await imageService.getCreatedImagesByUser(userId, query);

      const response = responseSuccess(
        result,
        `Get created images by user #${userId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async getSavedImagesByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const query = req.query;

      const result = await imageService.getSavedImagesByUser(userId, query);

      const response = responseSuccess(
        result,
        `Get saved images by user #${userId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async removeImage(req, res, next) {
    try {
      const { image_id } = req.params;
      const userId = req.user.user_id;

      const result = await imageService.removeImage(image_id, userId);

      const response = responseSuccess(
        result,
        `Remove image #${image_id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
  async searchImage(req, res, next) {
    try {
      const query = req.query;

      const result = await imageService.searchImage(query);

      const response = responseSuccess(result, "Search images successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
