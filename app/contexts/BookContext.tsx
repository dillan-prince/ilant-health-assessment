import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type BookContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const BookContext = createContext<BookContextType>({
  searchValue: "",
  setSearchValue: () => {},
});

export const BookContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => console.log(searchValue), [searchValue]);

  return (
    <BookContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
