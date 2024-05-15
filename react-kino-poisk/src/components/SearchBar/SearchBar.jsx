import { useDispatch } from "react-redux";
import "../SearchBar/SearchBar.css"
import { useEffect, useState } from "react";
import { fetchContent } from "../../store/reducer";

export default function SearchBar(){
    let [input,setInput]=useState('');
    let [request,setRequest]=useState(false);
    let dispatch=useDispatch();
    const [placeholder, setPlaceholder] = useState("Search for movies or TV shows");
    
    
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
    },[request]);

    useEffect(() => {
        if (request) {
            dispatch(fetchContent(`s=${input}`));
            setRequest(false);
        }
    }, [request, input, dispatch]);

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth <= 990) {
                setPlaceholder("Search...");
            } else {
                setPlaceholder("Search for movies or TV shows");
            }
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return(
        <>
        <div className="search-bar-container">
            <input className="search-bar__input" onChange={handleInputChange} onKeyDown={(ev)=>{
                if (ev.key === 'Enter') {
                    if(input.length!==0) 
                        setRequest(!request);
                }
            }} type="text" name='searchInput' placeholder={placeholder}/>
            <button onClick={()=>{
                if(input.length!==0)
                        setRequest(!request);
            }} className="search-bar__button">Search</button>
        </div>
        </>
    )
}

