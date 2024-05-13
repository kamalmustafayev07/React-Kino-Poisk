import Header from "../../components/Header/Header"
import Movies from "../../components/Movies/Movies"
import { Route,Routes } from 'react-router-dom';
import ListPage from "../ListPage/ListPage";
import "../MainPage/MainPage.css"

export default function MainPage(){
    return(
        <>
        <Header/>
        <main className="main-container">
            <Routes element={<Header/>}>
                <Route path="/" element={<Movies/>}/>
                <Route path="/favorites" element={<ListPage/>}/>
            </Routes>
        </main>
        
        </>
    )
}