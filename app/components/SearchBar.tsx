import { useBookContext } from "@/app/contexts/BookContext";
import { useState } from "react";

const SearchBar = () => {
  const { setSearchValue } = useBookContext();

  const [value, setValue] = useState("");

  return (
    <input
      className="bg-gray-100 dark:bg-slate-700 w-full p-4 rounded-md"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBar;
