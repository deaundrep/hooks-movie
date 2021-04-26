import React, { useContext } from 'react'; 
import { MovieContext } from "../context/context";
import "./MovieData.css";
import MovieDetails from './MovieDetails';

const MovieData = () => {

    const value = useContext(MovieContext);
    console.log(value)
    return value ? <MovieDetails /> : <div>Search some movie</div>
}

export default MovieData;
