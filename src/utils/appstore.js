import { configureStore } from "@reduxjs/toolkit";

import userreducer from './userslice'

let appstore = configureStore({
    reducer: {

          user : userreducer
          
    }
})

export default appstore