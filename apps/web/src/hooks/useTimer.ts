import { useEffect, useState } from "react";
import {
  formatDistanceToNow,
  formatDuration,
  intervalToDuration,
  isAfter,
  differenceInMilliseconds,
} from "date-fns";

export const useTimer = (endDate: Date, startDate?: Date) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateTime = () => {
    const now = new Date();

    if (isAfter(now, endDate)) {
      setTimeLeft("00:00:00");
      setIsExpired(true);
      setProgress(100);
      return;
    }

    setIsExpired(false);
    const duration = intervalToDuration({ start: now, end: endDate });

    const hours = duration.hours || 0;
    const minutes = duration.minutes || 0;
    const seconds = duration.seconds || 0;

    setTimeLeft(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );

    // Расчет прогресса на основе оставшегося времени
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const maxDuration = startDate
      ? differenceInMilliseconds(endDate, startDate) / 1000
      : 3600; // 1 час по умолчанию если нет startDate

    const progressPercent = Math.round(
      Math.max(
        0,
        Math.min(100, ((maxDuration - totalSeconds) / maxDuration) * 100)
      )
    );
    setProgress(progressPercent);
  };

  useEffect(() => {
    // Вызываем сразу при монтировании компонента
    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [endDate, startDate]);

  return { timeLeft, isExpired, progress };
};
