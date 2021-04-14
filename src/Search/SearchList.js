import React, { useContext } from "react";
import { SearchContext } from "../context/context";

const SearchList = () => {
    const { movieArray } = useContext(SearchContext);

    function showMovieList() {
        return movieArray.map((item, i) => {
            return (
                <li key={i}>
                    <img src={item.Poster} alt="movie poster" />
                    {item.Title}
                </li>
            );
        });
    }
    return <ul className="results">{showMovieList()}</ul>
}

export default SearchList;