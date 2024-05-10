import SearchBar from "../SearchBar/SearchBar.jsx"
import "../Header/Header.css"

export default function Header(){
    return(
        <>
        <header class='header-container'>
            <div className="header-container__logo">
                <img className="header-container__logo-image"src="JustWatch-logo-large.webp" alt="justwatch-logo"/>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Lists</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Guide</a></li>
                </ul>
            </nav>
            <SearchBar/>
            <button className="header-container__sign-in">Sign in</button>
        </header>
        </>
    )
}