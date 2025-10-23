import { Loading, Page } from "@/components";
import { useEffect } from "react";
import { useLaunchParams, useRawInitData } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_URL } from "@/lib";
import { isDev, validateDevice } from "@/utils";
import { useLoginUser } from "@/hooks";
import loadingImage from "@/_assets/images/loading.jpg";

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
      <img
        src={loadingImage}
        alt="Loading"
        className="size-full object-cover inset-0 fixed"
      />
    </Page>
  );
};
