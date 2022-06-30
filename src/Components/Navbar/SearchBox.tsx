import { useContext, useState } from "react";
import { SearchContext } from "../../App";
import { SearchContextType } from "../../Types";
import Button from "../CommonJSX/Button";

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
      <Button onClick={() => handleSearch(search)}>
        <span className="material-symbols-outlined">search</span>
      </Button>
    </>
  );
};

export default SearchBox;
