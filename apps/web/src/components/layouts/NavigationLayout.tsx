import React from "react";
import { cn } from "@/lib";
import { Outlet } from "react-router-dom";
import { Navigation } from "../shared";

export const NavigationLayout = () => {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
};
