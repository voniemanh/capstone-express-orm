import { prisma } from "../common/prisma/connect.prisma.js";
import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper.js";
import { buildQueryPrisma } from "../common/helpers/build-query-prisma.helper.js";

export const commentService = {
  async createComment(data, userId) {
    const { content, imageId } = data;

    if (!content || !imageId) {
      throw new BadRequestException("imageId or content are required");
    }

    const newComment = await prisma.comments.create({
      data: {
        content,
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

  async findCommentsByImage(query) {
    const { page, pageSize, where, index } = buildQueryPrisma(query);
    const comments = await prisma.comments.findMany({
      where,
      skip: index,
      take: pageSize,
      orderBy: { createdAt: "asc" },
      include: {
        Users: {
          select: { fullName: true, avatar: true },
        },
      },
    });

    const total = await prisma.images.count({
      where,
    });
    return {
      comments,
      page,
      pageSize,
      total,
    };
  },

  async updateComment({ commentId, content }, userId) {
    const comment = await prisma.comments.findUnique({
      where: { comment_id: Number(commentId) },
    });

    if (!comment || comment.isDeleted) {
      throw new NotFoundException(`Comment #${commentId} not found`);
    }

    if (comment.userId !== Number(userId)) {
      throw new BadRequestException(
        "You are not allowed to update this comment"
      );
    }

    const updated = await prisma.comments.update({
      where: { comment_id: Number(commentId) },
      data: { content, updatedAt: new Date() },
    });

    return updated;
  },

  async removeComment({ commentId }, userId) {
    const comment = await prisma.comments.findUnique({
      where: { comment_id: Number(commentId) },
    });

    if (!comment || comment.isDeleted) {
      throw new NotFoundException(`Comment #${commentId} not found`);
    }

    if (comment.userId !== Number(userId)) {
      throw new BadRequestException(
        "You are not allowed to delete this comment"
      );
    }

    const removed = await prisma.comments.update({
      where: { comment_id: Number(commentId) },
      data: { isDeleted: true, updatedAt: new Date() },
    });

    return removed;
  },
};
