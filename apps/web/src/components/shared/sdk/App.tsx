import { Navigate, Route, Routes } from "react-router-dom";
import { LoadingPage } from "@/pages/LoadingPage";
import { NavigationLayout } from "@/components/layouts";
import { HomePage } from "@/pages/HomePage";
import { EarnPage } from "@/pages/EarnPage";
import { WalletPage } from "@/pages/WalletPage";
import { BattleSelectHeroPage } from "@/pages/BattleSelectHeroPage";
import { BattleAreaPage } from "@/pages/BattleAreaPage";
import { BattleFinishPage } from "@/pages/BattleFinishPage";
import { ShopPage } from "@/pages/ShopPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route element={<NavigationLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/earn" element={<EarnPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/battle/select" element={<BattleSelectHeroPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Route>
      <Route path="/battle/:heroId" element={<BattleAreaPage />} />
      <Route path="/battle/finish/:id" element={<BattleFinishPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
