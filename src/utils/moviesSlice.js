import { createSlice } from "@reduxjs/toolkit";

let moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        movie : null
    },
    reducers :{
     addMovie : (state,action)=>{
         state.movie = action.payload
     }

    }
    
})


export const{addMovie} = moviesSlice.actions;

export default moviesSlice.reducer;