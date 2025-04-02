"use client";

import { useState, useEffect } from "react";
import { SearchIcon, X } from "lucide-react";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  initialValue?: string;
  className?: string;
}

export function Search({
  placeholder = "Search...",
  onSearch,
  initialValue = "",
  className = "",
}: SearchProps) {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="w-full p-3 pl-10 pr-10 bg-ap-dark-lighter border border-ap-pink/30 rounded-md text-white focus:outline-none focus:border-ap-pink transition-colors"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setQuery("")}
          aria-label="Clear search"
        >
          <X className="w-5 h-5 text-gray-400 hover:text-ap-pink" />
        </button>
      )}
    </div>
  );
}
