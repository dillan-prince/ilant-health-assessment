import BookPreview from "@/app/components/BookPreview";
import { useBookContext } from "@/app/contexts/BookContext";
import Spinner from "@/app/icons/Spinner";

const BooksList = () => {
  const { isLoading, data } = useBookContext();

  return (
    <div className="flex justify-center flex-wrap gap-8 h-full">
      {isLoading ? (
        <Spinner />
      ) : data?.items ? (
        data.items.length === 0 ? (
          <span>No results found.</span>
        ) : (
          data.items.map((book) => <BookPreview key={book.id} book={book} />)
        )
      ) : (
        <span>Use the above input to search for some books</span>
      )}
    </div>
  );
};

export default BooksList;
