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
  setHasSearched: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  data?: QueryBooksResponse;
};

const BookContext = createContext<BookContextType>({
  setHasSearched: () => {},
  searchValue: "",
  setSearchValue: () => {},
  setPage: () => {},
  isLoading: false,
});

export const BookContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [requestTimeoutId, setRequestTimeoutId] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<QueryBooksResponse>();

  const queryBooks = async () => {
    setIsLoading(true);
    const response = await fetch(
      `/api/books?${qs.stringify({ search_value: searchValue, page })}`,
    );
    const data: QueryBooksResponse = await response.json();

    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!hasSearched) {
      return;
    }

    clearTimeout(requestTimeoutId);

    setRequestTimeoutId(window.setTimeout(queryBooks, 100));

    return () => clearTimeout(requestTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, page]);

  return (
    <BookContext.Provider
      value={{
        setHasSearched,
        searchValue,
        setSearchValue,
        setPage,
        isLoading,
        data,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
