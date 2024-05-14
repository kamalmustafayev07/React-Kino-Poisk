import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const apiKey='51c46bdf';

export const fetchContent=createAsyncThunk(
    'content/fetchContent',
    async(urlValue)=>{
        const res=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&${urlValue}`);
        const data=await res.json();
        return data;
    }
)

const moviesSlice=createSlice({
    initialState:{
        movies:[
          {
            Title: "Spider-Man 3",
            Year: "2007",
            imdbID: "tt0413300",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
          },
          {
            Title: "Fight Club",
            Year: "1999",
            imdbID: "tt0137523",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            Title: "Interstellar",
            Year: "2014",
            imdbID: "tt0816692",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          },
          {
            Title: "Inception",
            Year: "2010",
            imdbID: "tt1375666",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
          },
          {
            Title: "Blade Runner 2049",
            Year: "2017",
            imdbID: "tt1856101",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
          },
          {
            Title: "The Godfather",
            Year: "1972",
            imdbID: "tt0068646",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            Title: "The Godfather Part II",
            Year: "1974",
            imdbID: "tt0071562",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            Title: "The Godfather Part III",
            Year: "1990",
            imdbID: "tt0099674",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg"
          },
          {
            Title: "The Dark Knight",
            Year: "2008",
            imdbID: "tt0468569",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
          },
          {
            Title: "Shutter Island",
            Year: "2010",
            imdbID: "tt1130884",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          },
        ],
        favorites:[],
        notClickedFavorites:true,
        isLoading:null,
        error:false,
        searchError:false,
    },
    name:'movies',
    reducers:{
        addToList:(state,action) =>{
            return {...state,favorites:[...state.favorites,action.payload]}  
        },
        deleteFromList:(state,action)=>{
            let indexOfElement=state.favorites.findIndex(item=>item.imdbID===action.payload.imdbID);
            return {...state,favorites:[...state.favorites.toSpliced(indexOfElement,1)]}
        },
        notClickedChange:(state,action)=>{
           return {...state,notClickedFavorites:!state.notClickedFavorites};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
          if(action.payload.Response==='True'){
            state.movies=action.payload.Search;
            state.searchError=false;
          }else{ 
              state.searchError=true;
            };
          state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state) => {
          state.isLoading = false
          state.error = true;
        })
      },
})


export const {addToList} = moviesSlice.actions;
export const {deleteFromList} = moviesSlice.actions;
export const {notClickedChange}= moviesSlice.actions;

export default moviesSlice.reducer;