import { useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import '../MoviesItem/MoviesItem.css'
import { addToList,deleteFromList } from '../../store/reducer';

export default function MoviesItem(props){
    let [notClicked,setNotClicked]=useState(false);
    let [clickedIcon,setClickedIcon]=(useState('icons8-plus.svg'));
    let dispatch=useDispatch();
    let favorites=useSelector((state)=>state.movies.favorites);
    let notClickedFavorites=useSelector(state=>state.movies.notClickedFavorites);

    useEffect(()=>{
        if((favorites.findIndex(item=>item.imdbID===props.imdbID))>=0)
        {
            setNotClicked(false);
            setClickedIcon('icons8-checkmark.svg');
        }
        else{
            setNotClicked(true);
            setClickedIcon('icons8-plus.svg');
        }
    },[favorites]);

    function handleClick(){
        if(notClicked){
                setClickedIcon('icons8-checkmark.svg');
                dispatch(addToList({
                    Title:props.Title,
                    Year:props.Year,
                    imdbID:props.imdbID,
                    Type:props.Type,
                    Poster:props.Poster,
                }));      
        }else{
                    dispatch(deleteFromList({
                        imdbID:props.imdbID
                    }))
                    setClickedIcon('icons8-plus.svg');
                }   
        setNotClicked(!notClicked);
    }

   

    return(
    <>
        <div className="movies__item-poster">
            <img onClick={handleClick} className="movies__item-poster__icon" src={`${clickedIcon}`} alt="clic-icon"/>
            <img className="movies__item-poster__image" src={props.Poster!=='N/A' ? `${props.Poster}` : `default-movie.png`} alt="movie-poster"/>
        </div>
        <h3 className="movies__item-title">{props.Title} ({props.Year})</h3>
        <button disabled={!notClickedFavorites} onClick={handleClick} className='movie__item-add-button'>
            <img className="movie__item-add-button__icon" src={`${clickedIcon}`} alt="click-icon"/>
            Add to favorites
        </button>
    </>
    )
}
