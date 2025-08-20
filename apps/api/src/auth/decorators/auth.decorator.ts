import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';

export const Auth = () => UseGuards(JwtAuthGuard);
