import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { AdminEntity } from './entities/admin.entity';
import { AdminAuth } from './decorators/auth.decorator';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  @ApiOkResponse()
  // @UseGuards(OnlyDevGuard)
  async register(@Body() data: RegisterDto) {
    return this.adminService.register(data.email, data.password);
  }

  @Post('login')
  @ApiOkResponse()
  async login(@Body() data: RegisterDto) {
    return this.adminService.login(data.email, data.password);
  }

  @Get('me')
  @ApiOkResponse()
  @AdminAuth()
  me(@Req() req: { user: AdminEntity }) {
    return req.user;
  }
}
