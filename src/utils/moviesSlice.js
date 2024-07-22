import { createSlice } from "@reduxjs/toolkit";

let moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        movie : null,
        setKey : null,
        popularMovies :null
    },
    reducers :{
     addMovie : (state,action)=>{
         state.movie = action.payload
     },

     addKeys : (state,action)=>{

      state.setKey = action.payload 

     },

     addPopularMovies : (state,action)=>{
         state.popularMovies = action.payload
     }




    }
    
})


export const{addMovie,addKeys,addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;