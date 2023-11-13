import { useState } from "react";
import { useThrottleClicks } from "../hooks/useThrottleClicks";

const Throttle = () => {
  const [count, setCount] = useState(0);
  const [normalCount, setNormalCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleNotThrottle = () => {
    setNormalCount((prev) => prev + 1);
  };

  const handleThrottle = useThrottleClicks(handleClick, 1000);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-1/2">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Throttling</h2>
        <p>Click Multiple Times on button to understand throttling.</p>
      </div>

      <div className="flex gap-4 text-center ">
        <section className="flex flex-col gap-2">
          <button
            onClick={handleNotThrottle}
            className="bg-green-600 px-4 py-2 rounded-lg text-white"
          >
            Not Throttle Button
          </button>
          <p>{normalCount}</p>
        </section>

        <section className="flex flex-col gap-2">
          <button
            onClick={handleThrottle}
            className="bg-red-500 px-4 py-2 rounded-lg text-white"
          >
            Throttle Button
          </button>
          <p>{count}</p>
        </section>
      </div>
    </div>
  );
};

export { Throttle };
