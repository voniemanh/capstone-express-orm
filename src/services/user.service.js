import fs from "fs";
import path from "path";
import cloudinary from "../common/cloudinary/init.cloudinary.js";
import {
  CLOUDINARY_NAME,
  FOLDER_IMAGE,
} from "../common/constant/app.constant.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const userService = {
  async avatarLocal(req) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    if (!req.file) {
      throw new BadRequestException("Không có file");
    }
    await prisma.users.update({
      where: {
        user_id: +req.user.user_id,
      },
      data: {
        avatar: req.file.filename,
      },
    });

    //   đảm bảo 1 user - 1 avatar
    if (req.user.avatar) {
      // cloud
      cloudinary.uploader.destroy(req.user.avatar);

      // XOÁ LOCAL
      // hàm join trong thư viện path sẽ cover mọi hệ điều hành
      // window: \\
      // macOs: //
      const oldPath = path.join(FOLDER_IMAGE, req.user.avatar);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    return true;
  },

  async avatarCloud(req) {
    if (!req.file) {
      throw new BadRequestException("Không có file");
    }

    // Upload lên Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: FOLDER_IMAGE }, (error, result) => {
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

    // Xoá avatar cũ (cloud + local)
    if (req.user.avatar) {
      cloudinary.uploader.destroy(req.user.avatar);

      const oldPath = path.join(FOLDER_IMAGE, req.user.avatar);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
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
