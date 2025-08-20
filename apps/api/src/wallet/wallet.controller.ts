import { Body, Controller, Post, Req } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { ConnectWalletDto } from './dto/connect-wallet.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('connect')
  @ApiOkResponse()
  @ApiBearerAuth()
  @Auth()
  connectWallet(
    @Req() req: { user: UserEntity },
    @Body() dto: ConnectWalletDto,
  ) {
    return this.walletService.connectWallet(req.user, dto);
  }

  @Post('disconnect')
  @ApiOkResponse()
  @ApiBearerAuth()
  @Auth()
  disconnectWallet(@Req() req: { user: UserEntity }) {
    return this.walletService.disconnectWallet(req.user);
  }
}
