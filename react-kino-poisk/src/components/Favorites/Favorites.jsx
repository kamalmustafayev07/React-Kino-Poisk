import '../Favorites/Favorites.css'
import {useDispatch, useSelector} from 'react-redux'
import { deleteFromList } from "../../store/reducer";
import { useEffect, useState } from 'react';

export default function Favorites(){
    let favorites=useSelector(state=>state.movies.favorites);

    let dispatch=useDispatch();

    const url = 'https://acb-api.algoritmika.org/api/movies/list/';
    const data = {
        "title": "mylist",
        "movies": [
            ...favorites
        ]
    }

    useEffect(()=>{
        const handleSave=async()=>{
            try {
                const response = await fetch(url, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
                headers: {
                'Content-Type': 'application/json'
                }
                });
                const json = await response.json();
                favorites=json.movies;
                console.log('Успех:', JSON.stringify(json));
            } catch (error) {
            console.error('Ошибка:', error);
            }
        }
    })
    
   
    return(
        <>
         <div className="list-page__container">
                <div className="list-page__movies-container">
                {favorites.length === 0 ? <h1 className="list-page__empty">List is empty</h1> :
                <>
                <ul className="list-page__movies">
                   {favorites.map((movie)=>{
                        return(
                            <li className="list-page__movies-item" key={movie.imdbID}>
                                <img className="movies-item__poster" src={movie.Poster!='N/A' ? `${movie.Poster}` : `default-movie.png`} alt="poster"/>
                                <h3 className="movies-item__title">{movie.Title} ({movie.Year})</h3>
                                <button onClick={()=>{
                                    dispatch(deleteFromList({
                                        imdbID:movie.imdbID,
                                    }))
                                }} className="movies-item__delete-button">Delete</button>
                            </li>
                        )
                    })}
                </ul>
                <button className="list-page__button">Save List</button>
                </>
                }                
                </div>
            </div>
        </>
    )
}