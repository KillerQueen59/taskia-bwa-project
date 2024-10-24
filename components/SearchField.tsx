"use client";

import { clsx } from "clsx";
import { useState } from "react";
import Image from "next/image";

type SearchFieldProps = {
  className?: string;
  placeholder?: string;
  onSearch: (v: string) => void;
  onChange?: (v: string) => void;
};

function SearchField({
  className = "",
  placeholder = "Search by report name...",
  onSearch,
  onChange,
}: SearchFieldProps) {
  const [search, setSearch] = useState("");

  return (
    <div className={clsx(className)}>
      <div className="h-full flex flex-wrap border border-primary-60 rounded-[50px] w-[400px]">
        <input
          type="input"
          className="flex-auto text-base font-normal mx-5 bg-primary-20 border-none focus:outline-none "
          placeholder={placeholder}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (onChange) {
              onChange(e.target.value);
            }
          }}
        />
        <button
          className="relative flex items-center p-3 text-xs font-medium "
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={() => {
            onSearch(search);
          }}>
          <Image
            src="/search-normal.svg"
            alt="Search"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>
    </div>
  );
}

export default SearchField;
