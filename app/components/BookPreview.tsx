/* eslint-disable @next/next/no-img-element */

import { Book } from "@/app/types";
import { useMemo } from "react";

type BookPreviewProps = {
  book: Book;
};

const BookPreview = ({ book }: BookPreviewProps) => {
  const truncatedDescription = useMemo(() => {
    const words = book.volumeInfo.description?.split(" ") ?? [];
    return words.length > 100
      ? `${words.slice(0, 101).join(" ")}...`
      : book.volumeInfo.description;
  }, [book.volumeInfo.description]);

  return (
    <div className="w-full flex rounded-md bg-stone-100 dark:bg-slate-700 p-4 gap-4">
      <div className="min-w-fit">
        {book.volumeInfo.imageLinks && (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="inline-block">{book.volumeInfo.title}</h1>
        <span className="text-slate-500 dark:text-gray-400">
          {book.volumeInfo.authors?.join(", ")}
        </span>
        <p>{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default BookPreview;
