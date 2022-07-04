import { useContext, useState } from "react";
import { SearchContext } from "../../App";
import { SearchContextType } from "../../Types";
import Button from "../CommonJSX/Button";
import Input from "../CommonJSX/Input";

const SearchBox = () => {
  const { handleSearch } = useContext(SearchContext) as SearchContextType;
  const [search, setSearch] = useState("");
  function onChange(str: string) {
    setSearch(str);
  }
  function onKeyDown(code: string) {
    if (code === "Enter") {
      handleSearch(search);
    }
  }
  return (
    <>
      <Input
        name="searchInput"
        placeholder="Type here..."
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button onClick={() => handleSearch(search)}>
        <span className="material-symbols-outlined">search</span>
      </Button>
    </>
  );
};

export default SearchBox;
