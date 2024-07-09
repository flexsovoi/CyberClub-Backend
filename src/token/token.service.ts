import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  generateTokens(payload) {
    const access_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: '15m',
    });
    const refresh_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '30d',
    });

    return { access_token, refresh_token };
  }

  validateAccessToken(token) {
    try {
      const user = this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET,
      });
      return user;
    } catch (e) {
      return null;
    }
  }
}
