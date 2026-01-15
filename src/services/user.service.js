import cloudinary from "../common/cloudinary/init.cloudinary.js";
import {
  CLOUD_FOLDER_AVATAR,
  CLOUDINARY_NAME,
} from "../common/constant/app.constant.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const userService = {
  async avatarCloud(req) {
    if (!req.file) {
      throw new BadRequestException("Image file is required");
    }

    // Upload lên Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: CLOUD_FOLDER_AVATAR }, (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        })
        .end(req.file.buffer);
    });

    // Lưu public_id vào DB
    await prisma.users.update({
      where: { user_id: +req.user.user_id },
      data: { avatar: uploadResult.public_id },
    });

    // Xoá avatar cũ (cloud )
    if (req.user.avatar) {
      cloudinary.uploader.destroy(req.user.avatar);
    }

    // Trả luôn URL đầy đủ cho frontend
    const avatarUrl = `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload/${uploadResult.public_id}`;

    return { avatarUrl };
  },

  async getMe(req) {
    const user = await prisma.users.findUnique({
      where: {
        user_id: +req.user.user_id,
      },
    });
    return user;
  },
  async updateMe(req) {
    const updatedUser = await prisma.users.update({
      where: {
        user_id: +req.user.user_id,
      },
      data: req.body,
    });
    return updatedUser;
  },
  async deleteMe(req) {
    const deletedUser = await prisma.users.update({
      where: {
        user_id: +req.user.user_id,
      },
      data: { isDeleted: true, updatedAt: new Date() },
    });
    return deletedUser;
  },
};
