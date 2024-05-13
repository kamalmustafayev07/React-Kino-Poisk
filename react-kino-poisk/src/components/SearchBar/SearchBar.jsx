import { useDispatch } from "react-redux";
import "../SearchBar/SearchBar.css"
import { useEffect, useState } from "react";
import { fetchContent } from "../../store/reducer";

export default function SearchBar(){
    let [input,setInput]=useState('');
    let [request,setRequest]=useState(false);
    let dispatch=useDispatch();
    
    function handleInputChange(ev)
    {
        setInput(ev.target.value);
    }

    useEffect(()=>{
        if(request)
        {
            dispatch(fetchContent(`s=${input}`));
            setRequest(!request);
        }
    });

    return(
        <>
        <div className="search-bar-container">
            <input onChange={handleInputChange} type="text" name='searchInput' placeholder="Search for movies or TV shows"/>
            <button onClick={()=>{
                if(input.length!==0)
                setRequest(!request);
                else{
                    return;
                }
                localStorage.setItem('active',true)

            }} className="search-button">Search</button>
        </div>
        </>
    )
}

