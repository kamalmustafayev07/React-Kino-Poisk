import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from './reducer'

const store= configureStore({
    reducer:{
        movies:moviesSlice
    }
})

export default store;