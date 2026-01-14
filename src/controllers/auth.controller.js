import { responseSuccess } from "../common/helpers/function.helper.js";
import { authService } from "../services/auth.service.js";

export const authController = {
  async register(req, res, next) {
    const result = await authService.register(req);
    const response = responseSuccess(result, `register auth successfully`);
    res.status(response.statusCode).json(response);
  },

  async login(req, res, next) {
    const result = await authService.login(req);
    const response = responseSuccess(result, `login auth successfully`);
    res.status(response.statusCode).json(response);
  },

  async getInfo(req, res, next) {
    const result = await authService.getInfo(req);
    const response = responseSuccess(result, `getInfo auth successfully`);
    res.status(response.statusCode).json(response);
  },

  async googleCallback(req, res, next) {
    const result = await authService.googleCallback(req);
    res.redirect(result);
  },

  async refreshToken(req, res, next) {
    const result = await authService.refreshToken(req);
    const response = responseSuccess(result, `refreshToken auth successfully`);
    res.status(response.statusCode).json(response);
  },
};
