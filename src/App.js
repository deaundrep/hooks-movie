import { useState } from "react";
import Search from "./Search/Search";
import { SearchContext, MovieContext } from "./context/context";
import "./App.css";

let OMDB_API = "85a09168";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movieArray, setMovieArray] = useState([]);

  async function handleOnChange(value) {
    setSearchValue(value);

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${OMDB_API}&s=${searchValue}`
    );

    const data = await response.json();
    console.log(data);
    setMovieArray(data.Search || []);
  }

  const searchContextValueObj = {
    movieSearchTitle: searchValue,
    handleOnChange,
    OMDB_API,
    movieArray,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SearchContext.Provider value={searchContextValueObj}>
        <Search />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
