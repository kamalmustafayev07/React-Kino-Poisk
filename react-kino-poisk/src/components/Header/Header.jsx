import SearchBar from "../SearchBar/SearchBar.jsx"
import "../Header/Header.css"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default function Header(){
    let favoritesLength=useSelector(state=>state.movies.favorites.length);
    let [count,setCount]=useState(0);

    useEffect(()=>{
        setCount(favoritesLength);
    },[favoritesLength]);

    return(
        <>
        <header className='header-container'>
            <div className="header-container__logo">
                <Link to="/">
                <img className="header-container__logo-image"src="JustWatch-logo-large.webp" alt="justwatch-logo"/>
                </Link>
            </div>
            <SearchBar/>
            <div className="header-container__buttons">
                <Link to="/favorites">
                <button className="header-container__buttons-favorites">
                    Favorites 
                    <span className="header-container-buttons-favorites_count">{count}</span>
                </button>
                </Link>
                
                <button className="header-container__buttons-sign-in">Sign in</button>
            </div>       
        </header>
        </>
    )
}