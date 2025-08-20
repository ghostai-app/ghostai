import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConnectWalletDto } from './dto/connect-wallet.dto';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class WalletService {
  constructor(private readonly prisma: PrismaService) {}

  async connectWallet(user: UserEntity, dto: ConnectWalletDto) {
    return await this.prisma.user.update({
      where: { id: user.id },
      data: { walletAddress: dto.wallet },
    });
  }

  async disconnectWallet(user: UserEntity) {
    return await this.prisma.user.update({
      where: { id: user.id },
      data: { walletAddress: null },
    });
  }
}
