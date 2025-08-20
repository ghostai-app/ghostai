import { Navigate, Route, Routes } from "react-router-dom";
import { LoadingPage } from "@/pages/LoadingPage";
import { NavigationLayout } from "@/components/layouts";
import { HomePage } from "@/pages/HomePage";
import { EarnPage } from "@/pages/EarnPage";
import { WalletPage } from "@/pages/WalletPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route element={<NavigationLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/earn" element={<EarnPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
