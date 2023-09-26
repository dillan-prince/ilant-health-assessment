import qs from "qs";
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

const clearTimeout = (requestTimeoutId?: number) => {
  if (requestTimeoutId) {
    window.clearTimeout(requestTimeoutId);
  }
};

export const BookContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [requestTimeoutId, setRequestTimeoutId] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const queryBooks = async () => {
    const response = await fetch(
      `/api/books?${qs.stringify({ search_value: searchValue })}`,
    );
    const data = await response.json();

    console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);

    clearTimeout(requestTimeoutId);

    setTimeout(queryBooks, 100);

    return () => clearTimeout(requestTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
