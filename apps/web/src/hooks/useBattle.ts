import { ENV, PUBLIC_URL } from "@/lib";
import { getAccessToken } from "@/services";
import { IBattle } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";

export const useBattle = (heroId: number) => {
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [battle, setBattle] = useState<IBattle | null>(null);

  useEffect(() => {
    let socket: Socket | null = null;

    const setupSocket = async () => {
      try {
        const token = getAccessToken();

        console.log("token", token);

        if (!token) throw new Error("Token is empty");

        socket = io(`${ENV.VITE_API_URL}/battle`, {
          auth: {
            token,
          },
          query: {
            heroId,
          },
        });

        socket.on("connect", () => {
          setError(null);
          setIsLoading(true);
        });

        socket.on("battleUpdate", (battle: IBattle) => {
          setBattle(battle);
          setIsLoading(false);
        });

        socket.on("battleFinish", (battle: IBattle) => {
          navigate(PUBLIC_URL.battleFinish(battle.id));
          setIsLoading(false);
        });

        socket.on("error", (error: { message: string }) => {
          setError(error.message || "Failed to get signals");
          setIsLoading(false);
        });

        socket.on("connect_error", () => {
          setError("Failed to connect");
          setIsLoading(false);
        });
      } catch {
        setError("Failed to connect");
        setIsLoading(false);
      }
    };

    setupSocket();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [heroId, navigate]);

  return {
    error,
    isLoading,
    battle,
  };
};
