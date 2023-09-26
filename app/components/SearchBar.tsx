import { useBookContext } from "@/app/contexts/BookContext";
import CloseX from "@/app/icons/CloseX";
import MagnifyingGlass from "@/app/icons/MagnifyingGlass";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useBookContext();

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlass />
      </div>
      <input
        className="bg-gray-100 dark:bg-slate-700 w-full py-4 px-10 rounded-md"
        type="text"
        placeholder="Enter search terms..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setSearchValue(e.target.value)}
      />
      {value && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <span className="cursor-pointer" onClick={() => setSearchValue("")}>
            <CloseX />
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
