"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type Props = {};

const Search = (props: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const hendleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={hendleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn">Search</button>
    </form>
  );
};

export default Search;
