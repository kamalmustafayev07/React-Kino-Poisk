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
                <Link className="header-container__logo-text" to="/">
                    <div>Kino<span>Move</span></div>
                </Link>
            </div>
            <SearchBar/>
            <button className="header-container__buttons-sign-in">Sign in</button>     
        </header>
        </>
    )
}