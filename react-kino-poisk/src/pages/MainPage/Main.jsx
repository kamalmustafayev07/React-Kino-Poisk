import Favorites from "../../components/Favorites/Favorites";
import Movies from "../../components/Movies/Movies";
import "../MainPage/Main.css"

export default function Main(){
    return(
        <>
         <main className="main-container">
            <Movies />
            <Favorites/>
         </main>
        </>
    )
}