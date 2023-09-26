import { useBookContext } from "@/app/contexts/BookContext";

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
  const { data, page, setPage } = useBookContext();

  if (!data?.totalItems || data.totalItems <= 10) {
    return null;
  }

  return (
    <div className="flex gap-8 items-center">
      {page !== 1 ? (
        <Button
          onClick={() => setPage(Math.max(page - 1, 1))}
          label="Previous"
        />
      ) : (
        <ButtonPlaceholder />
      )}
      <span className="w-12 text-center">{page}</span>
      {page * 10 < data.totalItems ? (
        <Button
          onClick={() =>
            setPage(Math.min(page + 1, Math.floor(data.totalItems / 10) + 1))
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
