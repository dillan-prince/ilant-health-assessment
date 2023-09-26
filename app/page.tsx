"use client";

import BooksList from "@/app/components/BooksList";
import Pagination from "@/app/components/Pagination";
import SearchBar from "@/app/components/SearchBar";
import { BookContextProvider } from "@/app/contexts/BookContext";

export default function Home() {
  return (
    <BookContextProvider>
      <main className="flex h-screen items-center flex-col p-4 overflow-hidden gap-4">
        <div className="max-w-5xl w-full sticky">
          <SearchBar />
        </div>
        <div className="grow w-full max-w-5xl overflow-auto no-scrollbar">
          <BooksList />
        </div>
        <Pagination />
      </main>
    </BookContextProvider>
  );
}
