import React from "react";
import { cn } from "@/lib";
import { PUBLIC_URL } from "@/lib";
import { useLocation } from "react-router-dom";
import { Link } from "./sdk";
import { navigationPages } from "@/data";
import { Container } from "./Container";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const Navigation: React.FC<Props> = ({ className }) => {
  const pathname = useLocation().pathname;
  const activeIndex = navigationPages.findIndex(
    (page) => page.url === pathname
  );

  // Количество элементов
  const navLength = navigationPages.length;

  return (
    <div
      className={cn(
        "fixed bottom-8 w-full right-0 left-0 z-[20] px-[calc(var(--horizontal-padding)*2)]",
        className
      )}
    >
      <Container className="rounded-full py-1 px-3.5 bg-secondary border border-outline shadow-outline flex items-center justify-center relative overflow-hidden">
        <div className="relative flex items-center justify-center w-full">
          {navigationPages.map((page, index) => (
            <Link
              key={page.url}
              to={page.url}
              className={cn(
                "flex flex-col gap-1 items-center justify-center size-15 rounded-full",
                index === 2 && "accent-gradient",
                activeIndex !== index && index !== 2 && "opacity-55"
              )}
            >
              <page.icon className="size-6 fill-white" />
              {index !== 2 && (
                <small
                  className={cn(
                    "text-white",
                    activeIndex !== index && "opacity-55"
                  )}
                >
                  {page.label}
                </small>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
