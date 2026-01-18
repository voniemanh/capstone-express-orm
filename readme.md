# 📸 IMAGE SHARING API

Backend API cho ứng dụng chia sẻ hình ảnh, cho phép người dùng:

- Đăng ký và đăng nhập
- Upload và quản lý hình ảnh
- Bình luận hình ảnh
- Lưu (save) hình ảnh yêu thích
- Chỉnh sửa thông tin cá nhân

---

## ⚙️ Công nghệ sử dụng

- Node.js, Express
- JWT Authentication
- MySQL
- Multer (upload file)

---

## 🔐 Xác thực

Hệ thống sử dụng JWT để xác thực người dùng.

- **Access Token**:
  Dùng để gọi các API cần đăng nhập, gửi qua header:

  ```http
  Authorization: Bearer <accessToken>
  ```

- **Refresh Token**:
  Dùng để cấp lại access token khi hết hạn.

---

## 📌 Danh sách API chính

### 🔑 Authentication

| Method | Endpoint                | Mô tả                            |
| ------ | ----------------------- | -------------------------------- |
| POST   | `/auth/register`        | Đăng ký tài khoản                |
| POST   | `/auth/login`           | Đăng nhập bằng email & password  |
| POST   | `/auth/refresh-token`   | Cấp lại access token             |
| GET    | `/auth/google`          | Đăng nhập bằng Google            |
| GET    | `/auth/google-callback` | Google redirect sau khi xác thực |

---

### 👤 User

| Method | Endpoint             | Mô tả                       |
| ------ | -------------------- | --------------------------- |
| GET    | `/user/me`           | Lấy thông tin user hiện tại |
| PUT    | `/user/me`           | Cập nhật thông tin user     |
| DELETE | `/user/me`           | Xoá tài khoản user          |
| POST   | `/user/avatar-cloud` | Upload avatar (cloud)       |

### 🖼 Image

| Method | Endpoint                            | Mô tả                      |
| ------ | ----------------------------------- | -------------------------- |
| POST   | `/images`                           | Upload hình ảnh            |
| GET    | `/images`                           | Lấy danh sách hình ảnh     |
| GET    | `/images/search`                    | Tìm kiếm hình ảnh          |
| GET    | `/images/user/:userId/user-created` | Hình ảnh người dùng đã tạo |
| GET    | `/images/user/:userId/user-saved`   | Hình ảnh người dùng đã lưu |
| PUT    | `/images/:image_id`                 | Cập nhật hình ảnh          |
| DELETE | `/images/:image_id`                 | Xóa hình ảnh               |

---

### 💬 Comment

| Method | Endpoint                | Mô tả                       |
| ------ | ----------------------- | --------------------------- |
| POST   | `/comments`             | Tạo bình luận               |
| GET    | `/comments/:imageId`    | Lấy bình luận theo hình ảnh |
| PUT    | `/comments/:comment_id` | Cập nhật bình luận          |
| DELETE | `/comments/:comment_id` | Xóa bình luận               |

---

### ⭐ Save Image

| Method | Endpoint                 | Mô tả           |
| ------ | ------------------------ | --------------- |
| POST   | `/images/:imageId`       | Lưu hình ảnh    |
| DELETE | `/images/:imageId`       | Bỏ lưu hình ảnh |
| GET    | `/images/check/:imageId` | Kiểm tra đã lưu |

---

## ⚠️ Lưu ý

- Tất cả API (ngoại trừ authentication) đều yêu cầu access token hợp lệ.
- API phục vụ mục đích học tập và demo.

---

## 👨‍🎓 Sinh viên thực hiện

voniemanh - Capstone: express orm
