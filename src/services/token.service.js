import jsonwebtoken from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from "../common/constant/app.constant.js";

export const tokenService = {
  createTokens(userId) {
    const accessToken = jsonwebtoken.sign(
      { userId: userId },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    const refreshToken = jsonwebtoken.sign(
      { userId: userId },
      REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },

  verifyAccessToken(accessToken, option) {
    const decode = jsonwebtoken.verify(
      accessToken,
      ACCESS_TOKEN_SECRET,
      option
    );
    // console.log("TOKEN VERIFY:", accessToken);
    return decode;
  },

  verifyRefreshToken(refreshToken, option) {
    const decode = jsonwebtoken.verify(
      refreshToken,
      REFRESH_TOKEN_SECRET,
      option
    );
    return decode;
  },
};
