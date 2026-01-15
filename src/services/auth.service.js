import bcrypt from "bcrypt";
import {
  BadRequestException,
  UnauthorizedException,
} from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";
import { tokenService } from "./token.service.js";

export const authService = {
  async register(req) {
    const { email, password, fullName } = req.body;

    // kiểm tra người dùng có hay chưa, nếu đã tồn tại thì không cho đăng ký
    const userExist = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    // nếu người dùng đã tồn tại thì trả lỗi 400 => không cho đăng ký
    if (userExist) {
      throw new BadRequestException(
        "User with this email already exists. Please use another email."
      );
    }

    // HASH - băm password
    // password, pin, key bí mật
    const hashPassword = bcrypt.hashSync(password, 10);

    // email này chưa tồn tại => tạo người dùng mới
    const userNew = await prisma.users.create({
      data: {
        email: email,
        password: hashPassword,
        fullName: fullName,
      },
    });

    return userNew;
  },

  async login(req) {
    const { email, password } = req.body;

    // Kiểm tra email người dùng có tồn tại trong db hay không
    // nếu mà tồn tại => đi tiếp
    // nếu mà chưa tồn => trả lỗi (Xin vui lòng đăng ký trước khi đăng nhập)
    const userExits = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (!userExits) {
      throw new BadRequestException("Please register before logging in");
      // throw new BadRequestException("Account Invalid")
    }

    // kiểm tra password
    const isPassword = bcrypt.compareSync(password, userExits.password);
    if (!isPassword) {
      throw new BadRequestException("Incorrect password");
      // throw new BadRequestException("Account Invalid")
    }

    // Encrypt: MÃ HOÁ
    // mã hoá 2 chiều: CÓ THỂ DỊCH NGƯỢC

    const tokens = tokenService.createTokens(userExits.user_id);

    // console.log({ email, password, userExits });

    return tokens;
  },

  async googleCallback(req) {
    // console.log("user google", req.user);

    const { accessToken, refreshToken } = tokenService.createTokens(
      req.user.user_id
    );
    // console.log({ accessToken, refreshToken });

    // truyền AT và RT trong query url của FE
    // FE dùng hook  useSearchParams(); để lấy AT và RT
    const urlRedirect = `http://localhost:3000/login-callback?accessToken=${accessToken}&refreshToken=${refreshToken}`;
    return urlRedirect;
  },

  async refreshToken(req) {
    const { accessToken, refreshToken } = req.body;

    // accessToken: đang bị hết hạn
    // verify accessToken phải loại trừ hết hạn
    const decodeAccessToken = tokenService.verifyAccessToken(accessToken, {
      ignoreExpiration: true,
    });
    const decodeRefreshToken = tokenService.verifyRefreshToken(refreshToken);

    if (decodeAccessToken.userId !== decodeRefreshToken.userId) {
      throw new UnauthorizedException("Refresh Token Invalid");
    }

    const userExits = await prisma.users.findUnique({
      where: {
        user_id: decodeRefreshToken.userId,
      },
    });
    if (!userExits) {
      throw new UnauthorizedException("User not found");
    }

    // Trường hợp: trả 2 token
    // refreshToken (1d) sẽ được làm mới (rotate): chỉ cần trong 1 ngày mà người dùng không đăng nhập => logout
    const tokens = tokenService.createTokens(userExits.user_id);

    // Trường hợp: trả 1 token (accessToken)
    // refreshToken KHÔNG được làm mới: thời gian sống bao nhiêu thì trạng thái đăng nhập giữ được bấy nhiêu

    // console.log({ accessToken, refreshToken });

    return tokens;
  },
};
