"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CheckingItem } from "./ChekingItem";
import { Button, ButtonWithVibration } from "@/components";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}

const initialData = [
  {
    label: "Account Age Verified",
    progress: 0,
  },
  {
    label: "Activity Level Analyzed",
    progress: 0,
  },
  {
    label: "Telegram Premium Checked",
    progress: 0,
  },
  {
    label: "OG Status Confirmed",
    progress: 0,
  },
];

export const Checking: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  const [data, setData] = useState(initialData);

  useEffect(() => {
    data.forEach((_, index) => {
      setTimeout(() => {
        setData((prevData) =>
          prevData.map((item, i) =>
            i === index ? { ...item, progress: 100 } : item
          )
        );
      }, index * 1000);
    });
  }, []);

  // useEffect(() => {
  //   let timeoutId: any;

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [data, router]);

  const completed = data.every((item) => item.progress === 100);

  return (
    <>
      <div
        className={cn(
          "w-[calc(100%-28px)] flex flex-col gap-6 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2",
          className
        )}
      >
        {data.map((item, index) => (
          <CheckingItem
            key={index}
            label={item.label}
            progress={item.progress}
          />
        ))}
      </div>

      <ButtonWithVibration
        onClick={() => navigate("/reward")}
        className="mt-auto"
        size={"default"}
        variant={completed ? "default" : "accent"}
        disabled={!completed}
      >
        Continue
      </ButtonWithVibration>
    </>
  );
};
