import React from "react";

const MovieData = (props) => {
  console.log(props);
  return (
    <div>
      {props.movieArray.map((movie) => (
        <div>{movie.Title}</div>
      ))}
    </div>
  );
};

export default MovieData;
