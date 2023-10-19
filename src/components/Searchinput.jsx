import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchinput = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      navigate(`/search/${keyword}`);
      setKeyword("")
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-4 p-4">
      <div className="flex">
        <input
          type="text"
          placeholder="Cari Manga"
          className="border p-2 w-full rounded-lg"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 ml-2 rounded-lg"
          onClick={handleSearch}
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default Searchinput;
