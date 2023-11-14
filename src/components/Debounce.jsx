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
    <div className="flex flex-col items-center justify-center gap-4 border-b border-red-600 p-8 lg:h-1/2">
      <h2 className="flex items-center justify-center text-2xl font-bold">
        Debouncing
      </h2>
      <div className="flex w-full flex-col gap-4 border p-4 md:flex-row  md:justify-between">
        <section className="flex w-full flex-col gap-4 border p-4 md:w-1/2">
          <h3 className="text-lg font-semibold">Normal Search</h3>
          <input
            type="text"
            onChange={handleInput}
            className="w-full rounded-lg border border-black p-2"
          />
          <p className="break-words text-lg text-red-500">{normalSearch}</p>
        </section>

        <section className="flex w-full flex-col gap-4 border p-4 md:w-1/2">
          <h3 className="text-lg font-semibold">Debounced Search</h3>
          <input
            type="text"
            onChange={handleSearch}
            className="w-full rounded-lg border border-black p-2"
          />
          <p className="break-words text-lg text-green-500">
            {debouncedSearch}
          </p>
        </section>
      </div>
    </div>
  );
};

export { Debounce };
