import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { jwtAuthGuard, localAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(localAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return await this.authService.login(req.user);
  }
}
