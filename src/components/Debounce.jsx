import { useState } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

const Debounce = () => {
  const [search, setSearch] = useState("");
  const [normalSearch, setNormalSearch] = useState("");

  const debouncedSearch = useDebouncedValue(search, 1000);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleInput = (e) => {
    setNormalSearch(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-1/2 border-b border-red-600">
      <h2 className="text-2xl font-bold flex items-center justify-center">
        Debouncing
      </h2>
      <div className="flex gap-4">
        <section className="flex flex-col gap-4 items-start">
          <h3 className="text-lg font-semibold">Normal Search</h3>
          <input
            type="text"
            onChange={handleInput}
            className="border border-black p-2 rounded-lg"
          />
          <p className="text-lg text-red-500">{normalSearch}</p>
        </section>

        <section className="flex flex-col gap-4 items-start">
          <h3 className="text-lg font-semibold">Debounced Search</h3>
          <input
            type="text"
            onChange={handleSearch}
            className="border border-black p-2 rounded-lg"
          />
          <p className="text-lg text-green-500">{debouncedSearch}</p>
        </section>
      </div>
    </div>
  );
};

export { Debounce };
