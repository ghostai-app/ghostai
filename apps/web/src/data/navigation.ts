import MapIcon from "@/_assets/icons/navigation/map.svg?react";
import RobotIcon from "@/_assets/icons/navigation/robot.svg?react";
import WalletIcon from "@/_assets/icons/navigation/wallet.svg?react";
import ShopIcon from "@/_assets/icons/navigation/shop.svg?react";
import BattleIcon from "@/_assets/icons/navigation/battle.svg?react";
import { PUBLIC_URL } from "@/lib";

export const navigationPages = [
  {
    icon: MapIcon,
    url: PUBLIC_URL.home(),
    label: "Home",
  },
  {
    icon: RobotIcon,
    url: PUBLIC_URL.earn(),
    label: "Ai Ghost",
  },
  {
    icon: BattleIcon,
    url: PUBLIC_URL.battleSelectHero(),
    label: "Battle",
  },
  {
    icon: ShopIcon,
    url: PUBLIC_URL.shop(),
    label: "Shop",
  },
  {
    icon: WalletIcon,
    url: PUBLIC_URL.wallet(),
    label: "Wallet",
  },
];
