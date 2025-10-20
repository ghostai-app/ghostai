import BinanceIcon from "@/_assets/icons/wallets/binance.svg?react";
import TonConnectIcon from "@/_assets/icons/wallets/ton.svg?react";
import OkxIcon from "@/_assets/icons/wallets/okx.svg?react";
import BitgetIcon from "@/_assets/icons/wallets/bitget.svg?react";

export const wallets = [
  {
    icon: TonConnectIcon,
    logoIcon: "#0A95F7",
    bgIcon: "#ffffff",
  },
  {
    icon: BinanceIcon,
    logoIcon: "#F3BA2F",
    bgIcon: "#ffffff",
    wallet: "binanceWeb3TonWallet",
  },
  {
    icon: OkxIcon,
    logoIcon: "#000000",
    bgIcon: "#ffffff",
    wallet: "okxMiniWallet",
  },
  {
    icon: BitgetIcon,
    logoIcon: "#000000",
    bgIcon: "#ffffff",
    wallet: "bitgetTonWallet",
  },
];
