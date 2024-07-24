import { createSlice } from "@reduxjs/toolkit";

let languageSlice = createSlice({
    name : "changeLanguagee",
    initialState : {
        language : null,
    },
    reducers :{
      changeAccorgingToLanguage :  (state,action)=>{
          
               state.language = action.payload
          
        }

    }
    
})



export const {changeAccorgingToLanguage} = languageSlice.actions

export default languageSlice.reducer