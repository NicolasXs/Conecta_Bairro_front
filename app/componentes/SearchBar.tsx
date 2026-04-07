"use client";

import { useState, FormEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || "Buscar..."}
        className="
          w-full 
          rounded-l-lg 
          border border-gray-300 dark:border-gray-600
          px-3 py-2 
          bg-[var(--background)] 
          text-[var(--foreground)]
          focus:outline-none 
          focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600
        "
      />

      <button
        type="submit"
        className="
          rounded-r-lg 
          px-4 py-2 
          bg-gray-200 dark:bg-gray-700 
          text-[var(--foreground)] 
          hover:bg-gray-300 dark:hover:bg-gray-600 
          transition
        "
      >
        🔍
      </button>

    </form>
  );
}
