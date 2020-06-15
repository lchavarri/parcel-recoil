import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchTermState } from "../state/search";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const setSearchTerm = useSetRecoilState(searchTermState);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  return (
    <div>
      <input onChange={handleChange} value={inputValue}></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
