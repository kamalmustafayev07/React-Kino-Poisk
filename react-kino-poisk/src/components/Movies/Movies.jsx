import { useSelector } from "react-redux";
import MoviesItem from "../MoviesItem/MoviesItem";
import "../Movies/Movies.css";

function Movies() {
  let movies = useSelector((state) => state.movies.movies);
  let isLoading = useSelector((state) => state.movies.isLoading);
  let error = useSelector((state) => state.movies.error);
  let searchError=useSelector((state)=>state.movies.searchError);

  if (isLoading) {
    return <h1 className="loading-header">Loading...</h1>;
  }

  if (error) {
    return <h1 className="error-header">Something went wrong...please retry!</h1>;
  }

  if(searchError)
  {
      return <h1 className="search-error-header">Found nothing.Please try again!</h1>
  }

  return (
    <>
      <div className="movies-container">
        <ul className="movies">
          {Array.isArray(movies) && movies.map((movie) => {
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

export default Movies;
