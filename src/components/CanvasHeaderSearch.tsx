import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchTermState } from "../state/search";
import { debounce } from "../services/utils";

const CanvasHeaderSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const setSearchTerm = useSetRecoilState(searchTermState);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
    debounce((val) => setSearchTerm(val), 500)(ev.target.value);
  };

  return (
    <div className="canvas-header-search">
      <input
        className="form-control"
        onChange={handleChange}
        value={inputValue}
        placeholder="Search by name or type"
      ></input>
    </div>
  );
};

export default CanvasHeaderSearch;
