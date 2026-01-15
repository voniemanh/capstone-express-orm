import cloudinary from "../common/cloudinary/init.cloudinary.js";
import {
  CLOUD_FOLDER_IMAGE,
  CLOUDINARY_NAME,
} from "../common/constant/app.constant.js";
import { buildQueryPrisma } from "../common/helpers/build-query-prisma.helper.js";
import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const imageService = {
  async createImage(req, userId) {
    const { image_name, image_description } = req.body;
    if (!image_name) {
      throw new BadRequestException("image_name is required");
    }
    if (!req.file) {
      throw new BadRequestException("Không có file");
    }

    // Upload lên Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: CLOUD_FOLDER_IMAGE }, (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        })
        .end(req.file.buffer);
    });

    const imageUrl = `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload/${uploadResult.public_id}`;

    const newImage = await prisma.images.create({
      data: {
        image_name,
        image_url: imageUrl,
        image_description,
        userId: Number(userId),
      },
      include: {
        Users: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    });
    console.log("newImage", newImage);
    return newImage;
  },
  async updateImage(data, userId, { image_id }) {
    const { image_name, image_url, image_description } = data;

    if (!image_url || !image_name) {
      throw new BadRequestException("image_url or image_name are required");
    }

    const updatedImage = await prisma.images.update({
      where: { image_id: Number(image_id) },
      data: {
        image_name,
        image_url,
        image_description,
        userId: Number(userId),
      },
    });
    console.log("updatedImage", updatedImage);

    return updatedImage;
  },

  async getAllImages(query) {
    const { page, pageSize, where, index } = buildQueryPrisma(query);

    const images = await prisma.images.findMany({
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
      images,
      page,
      pageSize,
      total,
    };
  },

  async getImageById(image_id) {
    const image = await prisma.images.findUnique({
      where: { image_id: Number(image_id) },
      include: {
        Users: {
          select: { fullName: true, avatar: true },
        },
      },
    });

    if (!image || image.isDeleted) {
      throw new NotFoundException(`Không tìm thấy image #${image_id}`);
    }

    return image;
  },

  async getCreatedImagesByUser(userId, query) {
    const { page, pageSize, where, index } = buildQueryPrisma(query);

    const images = await prisma.images.findMany({
      where: { ...where, userId: Number(userId) },
      skip: index,
      take: pageSize,
      orderBy: { createdAt: "asc" },
    });

    const total = await prisma.images.count({
      where: { ...where, userId: Number(userId) },
    });

    return { images, page, pageSize, total };
  },

  async getSavedImagesByUser(userId, query) {
    const { page, pageSize, index } = buildQueryPrisma(query);

    // join bảng SaveImages để lấy images đã save
    const savedImages = await prisma.saveImages.findMany({
      where: { userId: Number(userId), isDeleted: false },
      skip: index,
      take: pageSize,
      include: { Images: true },
      orderBy: { createdAt: "asc" },
    });

    const total = await prisma.saveImages.count({
      where: { userId: Number(userId), isDeleted: false },
    });

    // trả về mảng images
    const images = savedImages.map((item) => item.Images);

    return { images, page, pageSize, total };
  },

  async removeImage(image_id, userId) {
    const image = await prisma.images.findUnique({
      where: { image_id: Number(image_id) },
    });

    if (!image || image.isDeleted) {
      throw new NotFoundException(`Không tìm thấy image #${image_id}`);
    }
    const deleted = await prisma.images.update({
      where: { image_id: Number(image_id) },
      data: { isDeleted: true, updatedAt: new Date() },
    });

    return deleted;
  },
  async searchImage({ keyword, page, pageSize }) {
    const { where, index } = buildQueryPrisma({ page, pageSize });

    const images = await prisma.images.findMany({
      where: {
        ...where,
        isDeleted: false,
        OR: [
          { image_name: { contains: keyword } },
          { image_description: { contains: keyword } },
        ],
      },
      skip: index,
      take: pageSize,
      orderBy: { createdAt: "asc" },
    });

    const total = await prisma.images.count({
      where: {
        ...where,
        OR: [
          { image_name: { contains: keyword } },
          { image_description: { contains: keyword } },
        ],
      },
    });
    return {
      images,
      page,
      pageSize,
      total,
    };
  },
};
