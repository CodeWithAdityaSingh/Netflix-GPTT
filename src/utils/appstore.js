import { configureStore } from "@reduxjs/toolkit";
import userreducer from './userslice'
import moviereducer from "./moviesSlice"
import gptreducers from "./gptSlice"


let appstore = configureStore({
    reducer: {

          user : userreducer,
          movies : moviereducer,
          Gpt :   gptreducers
          
    }
})

export default appstore