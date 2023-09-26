"use client";

import SearchBar from "@/app/components/SearchBar";
import { BookContextProvider } from "@/app/contexts/BookContext";

export default function Home() {
  return (
    <BookContextProvider>
      <main className="flex min-h-screen items-center flex-col p-4">
        <div className="max-w-5xl items-center w-full mb-4">
          <SearchBar />
        </div>
        <div className="grow w-full max-w-5xl bg-slate-50"></div>
      </main>
    </BookContextProvider>
  );
}
