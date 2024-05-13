import "../ListPage/ListPage.css"
import {useDispatch, useSelector} from 'react-redux'
import { deleteFromList } from "../../store/reducer";

export default function ListPage(){
    let favorites=useSelector(state=>state.movies.favorites);
    let dispatch=useDispatch();



    return(
        <>
            <div className="list-page__container">
                <div className="list-page__movies-container">
                <ul className="list-page__movies">
                    {favorites.length===0 ? <h1 className="list-page__empty">Your list is empty</h1> :favorites.map((movie)=>{
                        return(
                        <>
                            <li className="list-page__movies-item" key={movie.imdbID}>
                                <img className="movies-item__poster" src={`${movie.Poster}`} alt="poster"/>
                                <h3 className="movies-item__title">{movie.Title} ({movie.Year})</h3>
                                <button onClick={()=>{
                                    dispatch(deleteFromList({
                                        imdbID:movie.imdbID,
                                    }))
                                }} className="movies-item__delete-button">Delete</button>
                            </li>
                        </>)
                    })}
                </ul>
                <button className="list-page__button">Save List</button>
                </div>
                
            </div>
        </>
    )
}