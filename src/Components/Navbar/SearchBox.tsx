import { useContext, useState } from "react";
import { SearchContext, SearchContextType } from "../../App";

const SearchBox = () => {
  const { handleSearch } = useContext(SearchContext) as SearchContextType;
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type here..."
        onKeyDown={(e) => e.code === "Enter" && handleSearch(search)}
      />
      <button onClick={() => handleSearch(search)}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </>
  );
};

export default SearchBox;
