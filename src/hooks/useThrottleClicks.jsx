import { useCallback, useState } from "react";

const useThrottleClicks = (cb, delay) => {
  const [isThrottled, setIsThrottled] = useState(false);

  const handleClick = useCallback(() => {
    if (!isThrottled) {
      cb();
      setIsThrottled(true);
      setTimeout(() => {
        setIsThrottled(false);
      }, delay);
    }
  }, [cb, delay, isThrottled]);

  return handleClick;
};

export { useThrottleClicks };
