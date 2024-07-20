import { createSlice } from "@reduxjs/toolkit";

let userslice = createSlice({
   
    name :  "user",
    initialState : null,

    reducers :{
        updateUser  :(state,action)=>{

            return action.payload
        },

        removeUser : (state,action)=>{
    
            return null

        }
    }





})
 

export const{updateUser,removeUser} = userslice.actions


export default userslice.reducer