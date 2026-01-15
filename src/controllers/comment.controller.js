import { commentService } from "../services/comment.service.js";
import { responseSuccess } from "../common/helpers/function.helper.js";

export const commentController = {
  // Tạo comment mới
  async createComment(req, res, next) {
    try {
      const userId = Number(req.user.user_id);
      const { content, imageId } = req.body;

      const result = await commentService.createComment(
        { content, imageId },
        userId
      );

      const response = responseSuccess(result, `Create comment successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // Lấy danh sách comment theo image
  async findCommentsByImage(req, res, next) {
    try {
      const { imageId } = req.params;
      const query = req.query;

      const result = await commentService.findCommentsByImage({
        imageId: Number(imageId),
        query,
      });

      const response = responseSuccess(result, `Get all comments successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // Cập nhật comment
  async updateComment(req, res, next) {
    try {
      const userId = Number(req.user.user_id);
      const commentId = Number(req.params.comment_id);
      const { content } = req.body;

      const result = await commentService.updateComment(
        { commentId, content },
        userId
      );

      const response = responseSuccess(
        result,
        `Update comment #${commentId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // Xoá comment
  async removeComment(req, res, next) {
    try {
      const userId = Number(req.user.user_id);
      const commentId = Number(req.params.comment_id);
      // console.log("commentId", commentId);
      // console.log("userId", userId);
      // console.log("req.params", req.params);

      const result = await commentService.removeComment({ commentId }, userId);

      const response = responseSuccess(
        result,
        `Remove comment #${commentId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
