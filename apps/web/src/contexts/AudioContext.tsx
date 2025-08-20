import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

type AudioContextType = {
  play: (url: string) => Promise<void>;
  stop: () => void;
  initializeAudio: () => Promise<void>;
};

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeAudio = async () => {
    if (isInitialized) return;
    setIsInitialized(true);
  };

  const play = async (url: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(url);
      // Устанавливаем низкий приоритет для звуков приложения
      audioRef.current.volume = 0.5;
    } else {
      audioRef.current.src = url;
    }

    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (error) {
      console.warn("Failed to play sound:", error);
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <AudioContext.Provider value={{ play, stop, initializeAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useGlobalAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useGlobalAudio must be used within an AudioProvider");
  }
  return context;
};
