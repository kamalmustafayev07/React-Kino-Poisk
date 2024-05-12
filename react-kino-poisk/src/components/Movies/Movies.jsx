import {useSelector } from "react-redux"
import MoviesItem from '../MoviesItem/MoviesItem'
import "../Movies/Movies.css"

export default function Movies(){
    let movies=useSelector(state=>state.movies.movies);
    let isLoading=useSelector(state=>state.movies.isLoading);
    let error=useSelector(state=>state.movies.error);

    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    if(error){
        return <h1>Error!</h1>
    }

    return(
        <>
        <div className="movies-container">
            <ul className="movies">
                {movies.length && movies.map((movie)=>{
                    return(
                        <li className="movies__item" key={movie.imdbID}>
                            <MoviesItem {...movie}/>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}