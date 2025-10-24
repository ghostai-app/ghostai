import { Loading, Page } from "@/components";
import { useEffect, useState } from "react";
import { useLaunchParams, useRawInitData } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_URL } from "@/lib";
import { isDev, validateDevice } from "@/utils";
import { useLoginUser } from "@/hooks";
import loadingImage from "@/_assets/images/loading.jpg";
import roadmapBg from "@/_assets/images/roadmapBg.png";
import { IUser } from "@/types";
import roadmapSlots from "@/_assets/images/roadmapSlots.json";
import Lottie from "lottie-react";

export const LoadingPage = () => {
  const initDataRaw = useRawInitData();
  const lp = useLaunchParams();
  const { mutateAsync: loginUser } = useLoginUser();
  const navigate = useNavigate();
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const handleLogin = async () => {
      if (!initDataRaw || !lp) return;
      const response = await loginUser({ initDataRaw });
      setUser(response.user);
    };

    handleLogin();
  }, [lp]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowRoadmap(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      if (user?.dailyAvaliable) {
        navigate(PUBLIC_URL.checkIn());
      } else {
        navigate(PUBLIC_URL.home());
      }
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <Page back={false}>
      {showRoadmap ? (
        <>
          <Lottie
            animationData={roadmapSlots}
            className="h-[75%] top-[15%] object-cover inset-0 fixed z-2"
          />
          <img
            src={roadmapBg}
            alt="Loading"
            className="size-full object-cover object-top inset-0 fixed transition-opacity duration-300"
          />
        </>
      ) : (
        <img
          src={loadingImage}
          alt="Loading"
          className="size-full object-cover object-top inset-0 fixed transition-opacity duration-300"
        />
      )}
    </Page>
  );
};
