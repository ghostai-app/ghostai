import { Loading, Page } from "@/components";
import { useEffect } from "react";
import { useLaunchParams, useRawInitData } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_URL } from "@/lib";
import { isDev, validateDevice } from "@/utils";
import { useLoginUser } from "@/hooks";

export const LoadingPage = () => {
  const initDataRaw = useRawInitData();
  const lp = useLaunchParams();
  const { mutate: loginUser } = useLoginUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      if (!initDataRaw || !lp) return;
      loginUser({ initDataRaw });
    };

    handleLogin();
  }, [lp]);

  return (
    <Page back={false}>
      <Loading />
    </Page>
  );
};
