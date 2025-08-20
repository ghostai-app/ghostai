import { UseGuards } from '@nestjs/common';
import { AdminJwtAuthGuard } from '../guard/admin-jwt-auth.guard';

export const AdminAuth = () => UseGuards(AdminJwtAuthGuard);
