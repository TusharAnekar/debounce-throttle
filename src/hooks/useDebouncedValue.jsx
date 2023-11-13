import { useEffect, useState } from "react";

const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debouncedValue;
};

export { useDebouncedValue };
