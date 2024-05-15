import './App.css'
import Header from "./components/Header/Header"
import { Route,Routes } from 'react-router-dom';
import ListPage from './pages/ListPage/ListPage';
import Main from './pages/MainPage/Main';

function App() {
  return (
    <>
      <Header/>
      <Routes element={<Header/>}>
        <Route path="/" element={<Main/>}/>
        <Route path="/list/:id" element={<ListPage/>}/>
      </Routes>
    </>
  )
}

export default App
