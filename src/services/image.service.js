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
  // Validation queries
  validateImageData(req) {
    if (!req.file) {
      throw new BadRequestException("Image file is required");
    }
    if (req.file.size > 5 * 1024 * 1024) {
      throw new BadRequestException("Image file size must be less than 5MB");
    }
    return true;
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
  validateImageName(image_name) {
    if (!image_name) {
      throw new BadRequestException("Image name is required");
    }
    if (image_name.length === 0 || image_name.length > 100) {
      throw new BadRequestException(
        "Image name must be between 1 and 100 characters"
      );
    }
    return image_name;
  },
  validateImageDescription(image_description) {
    if (image_description && image_description.length > 200) {
      throw new BadRequestException(
        "Image description is too long, maximum 200 characters"
      );
    }
    return image_description;
  },

  //CRUD services
  async createImage(req, userId) {
    const { image_name, image_description } = req.body;
    this.validateImageData(req);
    this.validateImageName(image_name);
    this.validateImageDescription(image_description);

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
    return newImage;
  },

  async updateImage(data, userId, { image_id }) {
    const { image_name, image_description } = data;

    const image = await this.validateImageExistence(image_id);
    this.validateImageName(image_name);
    this.validateImageDescription(image_description);
    if (userId !== image.userId) {
      throw new BadRequestException(
        "You are not allowed to update image for another user"
      );
    }

    const updatedImage = await prisma.images.update({
      where: { image_id: Number(image_id) },
      data: {
        image_name,
        image_description,
        userId: Number(userId),
      },
    });

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
      throw new NotFoundException(`Image #${image_id} not found`);
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
    const { page, pageSize, where, index } = buildQueryPrisma(query);
    const filteredWhere = {
      ...where,
      userId: Number(userId),
    };
    // join bảng SaveImages để lấy images đã save
    const savedImages = await prisma.saveImages.findMany({
      where: filteredWhere,
      skip: index,
      take: pageSize,
      include: { Images: true },
      orderBy: { createdAt: "asc" },
    });

    const total = await prisma.saveImages.count({
      where: filteredWhere,
    });

    // trả về mảng images
    const images = savedImages.map((item) => item.Images);

    return { images, page, pageSize, total };
  },

  async removeImage(image_id, userId) {
    const image = await this.validateImageExistence(image_id);
    if (image.userId !== Number(userId)) {
      throw new BadRequestException("You are not allowed to delete this image");
    }
    if (image.isDeleted) {
      throw new NotFoundException(`Image #${image_id} not found`);
    }

    const deleted = await prisma.images.update({
      where: { image_id: Number(image_id) },
      data: { isDeleted: true, updatedAt: new Date() },
    });

    return deleted;
  },
  async searchImage(query) {
    const { page, pageSize, where, index } = buildQueryPrisma(query);
    const filteredWhere = {
      ...where,
      OR: [
        { image_name: { contains: query.keyword } },
        { image_description: { contains: query.keyword } },
      ],
    };
    const images = await prisma.images.findMany({
      where: {
        ...filteredWhere,
      },
      skip: index,
      take: pageSize,
      orderBy: { createdAt: "asc" },
    });

    const total = await prisma.images.count({
      where: {
        ...filteredWhere,
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
