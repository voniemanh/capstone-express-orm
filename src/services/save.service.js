import { prisma } from "../common/prisma/connect.prisma.js";
import {
  NotFoundException,
  BadRequestException,
} from "../common/helpers/exception.helper.js";

export const saveService = {
  // Validate xem user đã lưu ảnh chưa
  async getSavedRecord(userId, imageId) {
    const existing = await prisma.saveImages.findUnique({
      where: { userId_imageId: { userId, imageId } },
    });
    return existing || null;
  },
  //CRUD
  async saveImage(userId, imageId) {
    // Kiểm tra ảnh có tồn tại
    const image = await prisma.images.findUnique({
      where: { image_id: imageId },
    });
    if (!image || image.isDeleted)
      throw new NotFoundException("Image not found");

    if (image.userId === userId) {
      throw new BadRequestException("You cannot save your own image");
    }

    const existing = await this.getSavedRecord(userId, imageId);

    if (existing) {
      if (existing.isDeleted) {
        // Nếu trước đó đã huỷ lưu, bật lại
        await prisma.saveImages.update({
          where: { userId_imageId: { userId, imageId } },
          data: { isDeleted: false, updatedAt: new Date() },
        });
      }
      return { saved: true, message: "Image saved successfully" };
    }

    await prisma.saveImages.create({
      data: { userId, imageId },
    });

    return { saved: true, message: "Image saved successfully" };
  },

  async unsave(userId, imageId) {
    const existing = await this.getSavedRecord(userId, imageId);

    if (!existing || existing.isDeleted) {
      return {
        saved: false,
        message: "Save record is not found or has been unsaved before",
      };
    }

    await prisma.saveImages.update({
      where: { userId_imageId: { userId, imageId } },
      data: { isDeleted: true, updatedAt: new Date() },
    });

    return { unsaved: true, message: "Image unsaved successfully" };
  },

  async checkSavedOrNot(userId, imageId) {
    const existing = await this.getSavedRecord(userId, imageId);

    if (!existing) {
      return { saved: false, message: "User has never saved this image" };
    }
    if (existing.isDeleted) {
      return { saved: false, message: "User previously unsaved this image" };
    }
    return { saved: true, message: "User has saved this image" };
  },
};
