import { useState} from 'react'
import { useDispatch } from "react-redux";
import '../MoviesItem/MoviesItem.css'
import { addToList,deleteFromList } from '../../store/reducer';

export default function MoviesItem(props){
    let [notClicked,setNotClicked]=useState(true);
    let [clickedIcon,setClickedIcon]=(useState('../../../icons/icons8-plus.svg'))
    let dispatch=useDispatch();

    function handleClick(){
        if(notClicked){
            setClickedIcon('../../../icons/icons8-checkmark.svg');
            dispatch(addToList({
                Title:props.Title,
                Year:props.Year,
                imdbID:props.imdbID,
                Type:props.Type,
                Poster:props.Poster,
            }));
        }
        else{
            dispatch(deleteFromList({
                imdbID:props.imdbID
            }))
            setClickedIcon('../../../icons/icons8-plus.svg');
        }
        setNotClicked(!notClicked);
    }

    return(
    <>
        <div className="movies__item-poster">
            <img onClick={handleClick} className="movies__item-poster__icon" src={`${clickedIcon}`} alt="clic-icon"/>
            <img className="movies__item-poster__image" src={`${props.Poster}`} alt="movie-poster"/>
        </div>
        <h3 className="movies__item-title">{props.Title} ({props.Year})</h3>
        <div onClick={handleClick} className='movie__item-add-button'>
            <img className="movie__item-add-button__icon" src={`${clickedIcon}`} alt="click-icon"/>
            Add to favorites
        </div>
    </>
    )
}
