import { prisma } from "../common/prisma/connect.prisma.js";
import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper.js";
import { buildQueryPrisma } from "../common/helpers/build-query-prisma.helper.js";

export const commentService = {
  // Validation queries
  validateContent(content) {
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      throw new BadRequestException("Content không được để trống");
    }
    if (trimmedContent.length > 200) {
      throw new BadRequestException("Content quá dài, tối đa 200 ký tự");
    }
    return trimmedContent;
  },
  async validateImageExistence(imageId) {
    const image = await prisma.images.findUnique({
      where: { image_id: Number(imageId) },
    });
    if (!image || image.isDeleted) {
      throw new NotFoundException(`Image #${imageId} not found`);
    }
    return image;
  },
  async validateComment(commentId, userId, action = "update") {
    const comment = await prisma.comments.findUnique({
      where: { comment_id: Number(commentId) },
    });

    if (!comment || comment.isDeleted) {
      throw new NotFoundException(`Comment #${commentId} not found`);
    }

    if (comment.userId !== Number(userId)) {
      throw new BadRequestException(
        `You are not allowed to ${action} this comment`
      );
    }

    return comment;
  },
  // CRUD services
  async createComment(data, userId) {
    const { content, imageId } = data;
    const trimmedContent = this.validateContent(content);
    await this.validateImageExistence(imageId);
    const newComment = await prisma.comments.create({
      data: {
        content: trimmedContent,
        imageId: Number(imageId),
        userId: Number(userId),
      },
      include: {
        Users: {
          select: { fullName: true, avatar: true },
        },
      },
    });

    return newComment;
  },

  async findCommentsByImage({ imageId, query }) {
    const { page, pageSize, where, index } = buildQueryPrisma(query);
    await this.validateImageExistence(imageId);
    const filterWhere = {
      ...where,
      imageId: Number(imageId),
      isDeleted: false,
    };
    const comments = await prisma.comments.findMany({
      where: filterWhere,
      skip: index,
      take: pageSize,
      orderBy: { createdAt: "asc" },
      include: {
        Users: {
          select: { fullName: true, avatar: true },
        },
      },
    });

    const total = await prisma.comments.count({
      where: filterWhere,
    });
    return {
      comments,
      page,
      pageSize,
      total,
    };
  },

  async updateComment({ commentId, content }, userId) {
    const comment = await this.validateComment(commentId, userId, "update");
    const trimmedContent = this.validateContent(content);
    await this.validateImageExistence(comment.imageId);

    const updated = await prisma.comments.update({
      where: { comment_id: Number(commentId) },
      data: { content: trimmedContent, updatedAt: new Date() },
    });

    return updated;
  },

  async removeComment({ commentId }, userId) {
    await this.validateComment(commentId, userId, "remove");
    const removed = await prisma.comments.update({
      where: { comment_id: Number(commentId) },
      data: { isDeleted: true, updatedAt: new Date() },
    });

    return removed;
  },
};
