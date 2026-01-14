import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// var GoogleStrategy = require("passport-google-oauth20").Strategy;
import passport from "passport";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../constant/app.constant.js";
import { BadRequestException } from "../helpers/exception.helper.js";
import { prisma } from "../prisma/connect.prisma.js";

/**
 * phải chạy trước mọi api xử lý về login google
 */
export const initGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3069/api/auth/google-callback",
      },
      async function (accessToken, refreshToken, profile, cb) {
        // console.dir({ accessToken, refreshToken, profile }, { colors: true, depth: null });

        const email = profile.emails[0].value;
        const isVerified = profile.emails[0].verified;
        const fullName = profile.displayName;
        const googleId = profile.id;
        const avatar = profile.photos[0].value;

        // console.log({ email, isVerified, fullName, googleId, avatar });

        if (!isVerified) {
          // thất bại
          cb(new BadRequestException("Email isVerified=false"), null);
          return;
        }

        const userExits = await prisma.users.findUnique({
          where: {
            email: email,
          },
        });

        // Nếu mà không có tài khoản thì tạo mới
        // Sẽ luôn luôn cho người dùng đăng nhập
        // Vì bên phía Google đã hỗ trợ xác thực
        if (!userExits) {
          await prisma.users.create({
            data: {
              email: email,
              googleId: googleId,
              avatar: avatar,
              fullName: fullName,
            },
          });
        }

        // nếu mà code chạy được tới đây thì sẽ đảm bảo userExits luôn có dữ liệu

        // thành công
        // hàm cb => tham số thứ 2 sẽ được gắn vào key "user" của object req
        cb(null, userExits);
      }
    )
  );
};
