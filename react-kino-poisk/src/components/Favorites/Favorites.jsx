import '../Favorites/Favorites.css'
import {useDispatch, useSelector} from 'react-redux'
import { deleteFromList } from "../../store/reducer";
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { notClickedChange } from '../../store/reducer';

export default function Favorites(){
    let notClickedFavorites=useSelector(state=>state.movies.notClickedFavorites);
    let dispatch=useDispatch();
    let [buttonText,setButtonText]=useState('Save List');
    let favorites=useSelector(state=>state.movies.favorites);
    let [id,setId]=useState('');

    useEffect(()=>{
        if(notClickedFavorites===true)
        {
            setButtonText('Save List');
        }
        else{
            setButtonText('Edit List');
        }
    })

    
    const url = 'https://acb-api.algoritmika.org/api/movies/list/';
    const data = {
        "title": "mylist",
        "movies": [
            ...favorites
        ]
    }

    const handleSave=async()=>{
        try {
            const response = await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
            });
            const json = await response.json();
            setId(json.id);
        } catch (error) {
        console.error('Ошибка:', error);
        }
    }

    useEffect(()=>{
        if(!notClickedFavorites){
            handleSave();
        }   
    },[notClickedFavorites]);
    
   
    return(
        <>
         <div className="favorites-container">
                <div className="favorites__movies-container">
                <h1 className="favorites__header">Favorites</h1>
                {favorites.length === 0 ? <h1 className="favorites__empty-text">List is empty</h1> :
                <>
                <ul className="favorites__movies">
                   {favorites.map((movie)=>{
                        return(
                            <li className="favorites__movies-item" key={movie.imdbID}>
                                <img className="movies-item__poster" src={movie.Poster!='N/A' ? `${movie.Poster}` : `default-movie.png`} alt="poster"/>
                                <h3 className="movies-item__title">{movie.Title} ({movie.Year})</h3>
                                {notClickedFavorites &&
                                <button onClick={()=>{
                                    dispatch(deleteFromList({
                                        imdbID:movie.imdbID,
                                    }))
                                }} className="movies-item__delete-button">Delete</button>}
                            </li>
                        )
                    })}
                </ul>
                <button onClick={()=>{
                    dispatch(notClickedChange());
                    }} className="favorites__save-button">{buttonText}</button>
                {!notClickedFavorites && <Link to={`/list/${id}`} className='favorites__watch-button'>Watch now</Link>}
                </>
                }                
                </div>
            </div>
        </>
    )
}