"use client";

import BooksList from "@/app/components/BooksList";
import SearchBar from "@/app/components/SearchBar";
import { BookContextProvider } from "@/app/contexts/BookContext";

export default function Home() {
  return (
    <BookContextProvider>
      <main className="flex h-screen items-center flex-col p-4 overflow-hidden">
        <div className="max-w-5xl items-center w-full mb-4 sticky">
          <SearchBar />
        </div>
        <div className="grow w-full max-w-5xl overflow-auto no-scrollbar">
          <BooksList />
        </div>
      </main>
    </BookContextProvider>
  );
}
