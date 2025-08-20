import { useNavigate } from "react-router-dom";
import {
  hideBackButton,
  onBackButtonClick,
  showBackButton,
} from "@telegram-apps/sdk-react";
import { type PropsWithChildren, useEffect } from "react";
import { BaseLayout } from "@/components/layouts";
import defaultBg from "/assets/backgrounds/default.jpg";

export function Page({
  children,
  back = true,
  withPadding = true,
  background,
  className,
}: PropsWithChildren<{
  back?: boolean;
  withPadding?: boolean;
  background?: string;
  className?: string;
}>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      showBackButton();
      return onBackButtonClick(() => {
        navigate(-1);
      });
    }
    hideBackButton();
  }, [back]);

  return (
    <BaseLayout
      background={background || defaultBg}
      withPadding={withPadding}
      className={className}
    >
      {children}
    </BaseLayout>
  );
}
