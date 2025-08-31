import { Balance, ConnectWalletBlock, Container, Page } from "@/components";
import wallet from "/assets/wallet.jpg";
import { useWallet } from "@/hooks";
import { cn } from "@/lib";

export const WalletPage = () => {
  const { wallet: walletAddress } = useWallet();

  return (
    <Page>
      <Container>
        <ConnectWalletBlock />

        <div className="absolute z-[-1] w-full h-3/4 inset-x-0 top-0">
          <div className="size-full relative">
            <div className="z-10 absolute inset-x-0 bottom-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
            <img
              key={walletAddress}
              className={cn(
                "size-full object-cover",
                !walletAddress && "grayscale"
              )}
              src={wallet}
            />
          </div>
        </div>
      </Container>
    </Page>
  );
};
