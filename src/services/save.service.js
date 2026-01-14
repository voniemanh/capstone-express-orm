import { prisma } from "../common/prisma/connect.prisma.js";
import { NotFoundException } from "../common/helpers/exception.helper.js";

export const saveService = {
  //Lưu ảnh cho user
  //Nếu đã lưu trước đó và isDeleted = true thì cập nhật lại
  async saveImage(userId, imageId) {
    // Kiểm tra ảnh có tồn tại
    const image = await prisma.images.findUnique({
      where: { image_id: imageId },
    });
    if (!image) throw new NotFoundException("Image not found");

    // Kiểm tra user đã lưu trước đó
    const existing = await prisma.saveImages.findUnique({
      where: {
        userId_imageId: {
          userId,
          imageId,
        },
      },
    });

    if (existing) {
      if (existing.isDeleted) {
        // Nếu trước đó đã huỷ lưu, bật lại
        await prisma.saveImages.update({
          where: { userId_imageId: { userId, imageId } },
          data: { isDeleted: false, updatedAt: new Date() },
        });
      }
      return { saved: true };
    }

    await prisma.saveImages.create({
      data: {
        userId,
        imageId,
      },
    });

    return { saved: true };
  },

  async unsave(userId, imageId) {
    const existing = await prisma.saveImages.findUnique({
      where: { userId_imageId: { userId, imageId } },
    });
    if (!existing || existing.isDeleted) {
      return { saved: false };
    }

    await prisma.saveImages.update({
      where: { userId_imageId: { userId, imageId } },
      data: { isDeleted: true, updatedAt: new Date() },
    });

    return { unsaved: true };
  },

  async checkSavedOrNot(userId, imageId) {
    const existing = await prisma.saveImages.findUnique({
      where: { userId_imageId: { userId, imageId } },
    });
    if (!existing) {
      return { saved: false };
    }
    if (existing.isDeleted) {
      return { saved: false };
    }
    if (!existing.isDeleted) {
      return { saved: true };
    }
  },
};
