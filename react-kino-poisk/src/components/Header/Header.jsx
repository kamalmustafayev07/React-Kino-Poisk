import SearchBar from "../SearchBar/SearchBar.jsx"
import "../Header/Header.css"
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
        <header className='header-container'>
            <Link className="header__logo-text" to="/">
                <div>Kino<span>Move</span></div>
            </Link>
            <SearchBar/>
            <button className="header__buttons-sign-in">Sign in</button>     
        </header>
        </>
    )
}