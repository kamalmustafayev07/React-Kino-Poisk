import Header from "../../components/Header/Header"
import Movies from "../../components/Movies/Movies"
import Favorites from "../../components/Favorites/Favorites"
import "../MainPage/MainPage.css"

export default function MainPage(){
    return(
        <>
        <Header/>
        <main className="main-container">
            <Movies/>
        </main>
        </>
    )
}