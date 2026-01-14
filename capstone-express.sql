-- -------------------------------------------------------------
-- TablePlus 6.8.0(654)
--
-- https://tableplus.com/
--
-- Database: capstone-express-orm
-- Generation Time: 2026-01-14 21:11:58.6890
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `Comments`;
CREATE TABLE `Comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `imageId` int NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_id`),
  KEY `fk_comments_user` (`userId`),
  KEY `fk_comments_image` (`imageId`),
  CONSTRAINT `fk_comments_image` FOREIGN KEY (`imageId`) REFERENCES `Images` (`image_id`),
  CONSTRAINT `fk_comments_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Images`;
CREATE TABLE `Images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `image_description` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`image_id`),
  KEY `fk_images_user` (`userId`),
  CONSTRAINT `fk_images_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `SaveImages`;
CREATE TABLE `SaveImages` (
  `userId` int NOT NULL,
  `imageId` int NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`,`imageId`),
  KEY `fk_saveimages_image` (`imageId`),
  CONSTRAINT `fk_saveimages_image` FOREIGN KEY (`imageId`) REFERENCES `Images` (`image_id`),
  CONSTRAINT `fk_saveimages_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Comments` (`comment_id`, `content`, `userId`, `imageId`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
(1, 'Ảnh này dễ thương ghê', 2, 1, 0, '2026-01-13 11:56:41', '2026-01-13 11:56:41'),
(2, 'Ảnh này dễ thương ghê', 2, 1, 0, '2026-01-13 11:59:35', '2026-01-13 11:59:35'),
(3, 'Sửa lại cute', 3, 1, 0, '2026-01-13 12:50:50', '2026-01-14 01:09:54'),
(4, 'Sửa lại nữa nữa nè', 3, 1, 0, '2026-01-13 13:18:29', '2026-01-14 03:40:58'),
(5, 'Ảnh này ute', 3, 1, 1, '2026-01-14 00:49:19', '2026-01-14 01:31:00'),
(6, 'Ảnh này ute', 3, 1, 0, '2026-01-14 00:52:17', '2026-01-14 00:52:17'),
(7, 'comment anh', 3, 2, 0, '2026-01-14 01:33:23', '2026-01-14 01:33:23'),
(8, 'comment anhhhh', 5, 2, 0, '2026-01-14 06:38:11', '2026-01-14 06:38:11');

INSERT INTO `Images` (`image_id`, `image_name`, `image_url`, `image_description`, `userId`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
(1, 'papa image update', 'https://example.com/papa.png', 'papa ga update shita image', 6, 1, '2026-01-13 11:46:19', '2026-01-14 07:06:56'),
(2, 'Con mèo béo ú', 'https://example.com/cat.png', 'Ảnh mèo dễ thương', 3, 1, '2026-01-14 00:52:47', '2026-01-14 01:38:56'),
(3, 'con cho con', 'https://example.com/cat.png', 'Ảnh cho dễ thương', 3, 0, '2026-01-14 01:40:27', '2026-01-14 01:40:27'),
(4, 'papa image update', 'https://example.com/papa.png', 'papa ga update shita image', 6, 1, '2026-01-14 07:05:48', '2026-01-14 07:08:54'),
(5, 'papa image', 'https://example.com/papa.png', 'papa ga tsuika shita image', 6, 0, '2026-01-14 10:57:42', '2026-01-14 10:57:42');

INSERT INTO `SaveImages` (`userId`, `imageId`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
(2, 1, 0, '2026-01-13 12:32:34', '2026-01-13 12:32:34'),
(3, 1, 0, '2026-01-13 12:45:37', '2026-01-13 12:45:37'),
(3, 2, 0, '2026-01-14 02:53:53', '2026-01-14 03:33:51'),
(6, 2, 0, '2026-01-14 11:03:11', '2026-01-14 11:03:24');

INSERT INTO `Users` (`user_id`, `email`, `password`, `fullName`, `age`, `avatar`, `isDeleted`, `createdAt`, `updatedAt`) VALUES
(1, 'user@gmail.com', '$2b$10$We4UIM8f0OGefHgofIAvo.4WAGvUKvJwfl1VTqtTnZITnUTVetLzK', 'Bé Mèo', NULL, NULL, 0, '2026-01-13 10:13:47', '2026-01-13 10:13:47'),
(2, 'user3@gmail.com', '$2b$10$8.Y3KR2ZXE2fM6Ldmtaz1OiXFalZ9WCbFQad2ivLzgo2vqDzWTIqC', 'nami', NULL, NULL, 0, '2026-01-13 11:34:24', '2026-01-13 11:34:24'),
(3, 'string@gmail.com', '$2b$10$2xHIA4KZI4VSBA6PTS4xsehLWalvyhAGIwWOIGyDoMRovArZppyU6', 'elf', 18, NULL, 0, '2026-01-13 12:40:57', '2026-01-14 00:53:49'),
(4, 'user4@gmail.com', '$2b$10$.GGuqSPm4SkElwkJmrNbbO6.rKzvkMVdGdIV/KMn9JE/YMbN0e8hS', 'nami', NULL, NULL, 0, '2026-01-13 13:27:16', '2026-01-13 13:27:16'),
(5, 'user6@gmail.com', '$2b$10$JU2llN3w..Q9.e6RA5I3XeuQuc2cT9CBck2HVV.Vih8zLb6ZL3yWG', 'namida', NULL, NULL, 0, '2026-01-14 05:58:22', '2026-01-14 05:58:22'),
(6, 'st3@gmail.com', '$2b$10$cBvJlqipqxspcuz69FBopu0AhjyMvsA9ec0vPV.mTbUoHQIuQOW.e', 'panda', 30, NULL, 1, '2026-01-14 06:56:15', '2026-01-14 11:05:14');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;