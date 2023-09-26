import { useBookContext } from "@/app/contexts/BookContext";
import { useEffect, useState } from "react";

const sharedClasses = "";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      className="p-2 w-28 bg-slate-200 dark:bg-slate-500 rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const ButtonPlaceholder = () => {
  return <div className="p-2 w-28" />;
};

const Pagination = () => {
  const { data, setPage } = useBookContext();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setPage(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (!data?.totalItems || data.totalItems <= 10) {
    return null;
  }

  return (
    <div className="flex gap-8 items-center">
      {currentPage !== 1 ? (
        <Button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          label="Previous"
        />
      ) : (
        <ButtonPlaceholder />
      )}
      <span className="w-12 text-center">{currentPage}</span>
      {currentPage * 10 < data.totalItems ? (
        <Button
          onClick={() =>
            setCurrentPage(
              Math.min(currentPage + 1, Math.floor(data.totalItems / 10) + 1),
            )
          }
          label="Next"
        />
      ) : (
        <ButtonPlaceholder />
      )}
    </div>
  );
};

export default Pagination;
