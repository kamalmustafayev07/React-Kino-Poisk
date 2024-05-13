import { useSelector } from "react-redux";
import MoviesItem from "../MoviesItem/MoviesItem";
import "../Movies/Movies.css";
import React, { useEffect, useState } from "react";

function Movies() {
  let movies = useSelector((state) => state.movies.movies);
  let isLoading = useSelector((state) => state.movies.isLoading);
  let error = useSelector((state) => state.movies.error);
  let [array, setArray] = useState([]);
  let savedMovies = movies.map((item) => {
    return { ...item, added: false };
  });

  useEffect(() => {
    if (localStorage.getItem("active") === 'true') {
      localStorage.setItem("movies", JSON.stringify(savedMovies));
      console.log('serach')
    }
    
    let arr = JSON.parse(localStorage.getItem("movies"));
    setArray(arr);
  }, [movies]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <>
      <div className="movies-container">
        <ul className="movies">
          {array.length &&
            array.map((movie) => {
              return (
                <li className="movies__item" key={movie.imdbID}>
                  <MoviesItem {...movie} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default React.memo(Movies);
