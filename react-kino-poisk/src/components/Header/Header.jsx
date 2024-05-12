import SearchBar from "../SearchBar/SearchBar.jsx"
import "../Header/Header.css"

export default function Header(){
    return(
        <>
        <header className='header-container'>
            <div className="header-container__logo">
                <a href="#">
                    <img className="header-container__logo-image"src="JustWatch-logo-large.webp" alt="justwatch-logo"/>
                </a>
            </div>
            <SearchBar/>
            <div className="header-container__buttons">
                <button className="header-container__buttons-favorites">
                    Favorites 
                    <span className="header-container-buttons-favorites_count">1</span>
                    </button>
                <button className="header-container__buttons-sign-in">Sign in</button>
            </div>       
        </header>
        </>
    )
}