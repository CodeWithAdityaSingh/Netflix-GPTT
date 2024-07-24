import { configureStore } from "@reduxjs/toolkit";
import userreducer from './userslice'
import moviereducer from "./moviesSlice"
import gptreducers from "./gptSlice"
import langaudereducers from './languageSlice'


let appstore = configureStore({
    reducer: {

          user : userreducer,
          movies : moviereducer,
          Gpt :   gptreducers,
          changeLanguagee : langaudereducers
          
    }
})

export default appstore