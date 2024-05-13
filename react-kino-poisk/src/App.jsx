import './App.css'
import Header from "./components/Header/Header"
import Movies from "./components/Movies/Movies"
import { Route,Routes } from 'react-router-dom';
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <>
    <div className="app-container">
      <Header/>
        <main className="main-container">
            <Routes element={<Header/>}>
                <Route path="/" element={<Movies/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
        </main>
    </div>
    </>
  )
}

export default App
