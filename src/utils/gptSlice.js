import { createSlice } from "@reduxjs/toolkit";

let gptSlice = createSlice({

    name : "Gpt",
    initialState : {
        searchTextState : true
    },
    reducers : {
      addState : (state,action)=>{

 
        
        state.searchTextState = !state.searchTextState


      },

    


    }
})

export const{addState} = gptSlice.actions

export default gptSlice.reducer