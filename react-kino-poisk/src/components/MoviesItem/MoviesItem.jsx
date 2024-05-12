import { useState } from 'react'
import '../MoviesItem/MoviesItem.css'

export default function MoviesItem(props){
    let [notClicked,setNotClicked]=useState(true);
    let [clickedIcon,setClickedIcon]=useState('../../../icons/icons8-plus.svg');

    function handleClick(){
        if(notClicked){
            setClickedIcon('../../../icons/icons8-checkmark.svg');
        }
        else{
            setClickedIcon('../../../icons/icons8-plus.svg');
        }
        setNotClicked(notClicked=>!notClicked);
    }

    return(
    <>
    <div className="movies-item">
        <div className="movies-item__poster">
            <img className="movies-item__poster-icon" src={`${clickedIcon}`} alt="clic-icon"/>
            <img className="movies-item__poster-image" src={`${props.Poster}`} alt="movie-poster"/>
        </div>
        <div onClick={handleClick}
        className='movies-item__info'>
            <h3 className="movies-item__title">{props.Title} ({props.Year})</h3>
            <div className='movie-item__add-button'>
                <img className="movie-item__add-button-icon" src={`${clickedIcon}`} alt="click-icon"/>
                Add to favorites
            </div>

        </div>
    </div>
    </>
    )
}