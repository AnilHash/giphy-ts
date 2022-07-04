import { createContext, useEffect, useState } from "react";

import CardsContainer from "./Components/Main_Container/CardsContainer";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Pagination from "./Components/Pagination";
import "./styles/style.scss";
import { SearchContextType } from "./Types";

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

function App() {
  const baseURL = `https://api.giphy.com/v1/gifs`;
  const [search, setSearch] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY!;
  const initialPageValue = {
    total_count: 0,
    count: 25,
    offset: 0,
  };
  const [gifData, setGifData] = useState();
  const [pagination, setPagination] = useState(initialPageValue);
  function handleSearch(searchString: string) {
    setSearch(searchString);
  }
  function paginationHandle(pageCount: number) {
    setPagination((prevState) => ({
      ...pagination,
      offset: prevState.offset + pageCount,
    }));
  }
  function urlCreater() {
    if (search) {
      return `${baseURL}/search?api_key=${API_KEY}&q=${search}&limit=${pagination.count}&offset=${pagination.offset}&rating=g&lang=en`;
    }
    return `${baseURL}/trending?api_key=${API_KEY}&limit=${pagination.count}&rating=g&offset=${pagination.offset}`;
  }
  useEffect(() => {
    fetch(urlCreater())
      .then((response) => response.json())
      .then((data) => {
        const { total_count, count, offset } = data.pagination;
        setGifData(data.data);
        setPagination({ total_count, count, offset });
        // document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
      .catch((err) => console.log(err));
  }, [pagination.offset, search]);

  return (
    <div className="app">
      <SearchContext.Provider value={{ handleSearch }}>
        <NavBar />
      </SearchContext.Provider>
      {!gifData ? (
        <div className="loader"></div>
      ) : (
        <>
          <CardsContainer cards={gifData} />
          <Pagination
            pageInfo={pagination}
            paginationHandle={paginationHandle}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
