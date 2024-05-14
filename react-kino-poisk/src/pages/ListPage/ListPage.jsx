import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ListPage/ListPage.css"

export default function ListPage() {
    let { id } = useParams();
    let [savedMovies, setSavedMovies] = useState(null);

    useEffect(() => {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(res => res.json())
            .then(data => setSavedMovies(data))
            .catch(error => console.log(error));
    }, [id]);

    useEffect(() => {
        if (savedMovies) {
            console.log(savedMovies.movies);
        }
    }, [savedMovies]);

    return (
        <>
            <div className="list-page-container">
                <ul className="list-page">
                    {savedMovies && savedMovies.movies && savedMovies.movies.map((movie) => (
                        <a className="list-page__link" href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" key={movie.imdbID}>
                            <li className="list-page__item">
                                <img src={movie.Poster !== "N/A" ? movie.Poster : "default-movie.png"} className="list-page__item-poster" alt="movie-poster" />
                                <h2 className="list-page__item-title">{movie.Title}</h2>
                                <button className="list-page__item-watch-button">Watch on IMDB</button>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
}
