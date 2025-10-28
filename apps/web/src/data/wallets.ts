import BinanceIcon from "@/_assets/icons/wallets/binance.svg?react";
import TonConnectIcon from "@/_assets/icons/wallets/ton.svg?react";
import OkxIcon from "@/_assets/icons/wallets/okx.svg?react";
import BitgetIcon from "@/_assets/icons/wallets/bitget.svg?react";

export const wallets = [
  {
    icon: BinanceIcon,
    logoIcon: "#000000",
    bgIcon: "#F3BA2F",
    wallet: "binanceWeb3TonWallet",
  },
  {
    icon: OkxIcon,
    logoIcon: "#000000",
    bgIcon: "#9AED2D",
    wallet: "okxMiniWallet",
  },
  {
    icon: BitgetIcon,
    logoIcon: "#000000",
    bgIcon: "#00F0FF",
    wallet: "bitgetTonWallet",
  },
];

export const walletsData = [
  {
    icon: TonConnectIcon,
    logoColor: "#0A95F7",
    className: "bg-[linear-gradient(135deg,_#161618_22.1%,_#203A72_118.78%)]",
  },
  {
    icon: BinanceIcon,
    logoColor: "#F3BA2F",
    className: "bg-[linear-gradient(135deg,_#161618_22.1%,_#876E2D_118.78%)]",
    wallet: "binanceWeb3TonWallet",
  },
  {
    icon: OkxIcon,
    logoColor: "#ffffff",
    className: "bg-[linear-gradient(135deg,_#161618_22.1%,_#8A8A8A_118.78%)]",
    wallet: "okxMiniWallet",
  },
];
