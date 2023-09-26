import { clearTimeout } from "@/app/contexts/BookContext.utls";
import { QueryBooksResponse } from "@/app/types";
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
  isLoading: boolean;
  data?: QueryBooksResponse;
};

const BookContext = createContext<BookContextType>({
  searchValue: "",
  setSearchValue: () => {},
  isLoading: false,
});

export const BookContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [requestTimeoutId, setRequestTimeoutId] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<QueryBooksResponse>();

  const queryBooks = async () => {
    setIsLoading(true);
    const response = await fetch(
      `/api/books?${qs.stringify({ search_value: searchValue })}`,
    );
    const data: QueryBooksResponse = await response.json();

    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    clearTimeout(requestTimeoutId);

    setRequestTimeoutId(window.setTimeout(queryBooks, 100));

    return () => clearTimeout(requestTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <BookContext.Provider
      value={{
        searchValue,
        setSearchValue,
        isLoading,
        data,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
