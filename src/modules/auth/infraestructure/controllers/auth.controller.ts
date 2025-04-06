import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Post('login')
  login(@Body() body: { username: string }) {
    const payload = { sub: 1, username: body.username };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
