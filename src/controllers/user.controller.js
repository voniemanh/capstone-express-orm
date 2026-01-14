import { responseSuccess } from "../common/helpers/function.helper.js";
import { userService } from "../services/user.service.js";

export const userController = {
  async avatarLocal(req, res, next) {
    const result = await userService.avatarLocal(req);
    const response = responseSuccess(result, `avatarLocal user successfully`);
    res.status(response.statusCode).json(response);
  },

  async avatarCloud(req, res, next) {
    const result = await userService.avatarCloud(req);
    const response = responseSuccess(result, `avatarCloud user successfully`);
    res.status(response.statusCode).json(response);
  },

  async updateMe(req, res, next) {
    const result = await userService.updateMe(req);
    const response = responseSuccess(
      result,
      `Update user #${req.user.user_id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
  async getMe(req, res, next) {
    const result = await userService.getMe(req);
    const response = responseSuccess(
      result,
      `Get user #${req.user.user_id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  async deleteMe(req, res, next) {
    const result = await userService.deleteMe(req);
    const response = responseSuccess(
      result,
      `Remove user #${req.user.user_id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
};
