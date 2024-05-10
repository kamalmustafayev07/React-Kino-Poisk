import "../SearchBar/SearchBar.css"

export default function SearchBar(){
    return(
        <>
        <div className="search-bar-container">
            <button className="search-button">Search</button>X
            <input type="text" placeholder="Search for movies or TV shows"/>
        </div>
        </>
    )
}