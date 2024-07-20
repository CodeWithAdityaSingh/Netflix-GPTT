import Browse from "./Browse"
import Login from "./Login"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { updateUser } from "../utils/userslice";
import { removeUser } from "../utils/userslice";
// import



let routerr = createBrowserRouter([
    {
        path : '/',
        element : <Login/>
    },
    {
        path : 'browser',
        element : <Browse/>
    }
])





let Body = () => {

    let  dispatch = useDispatch()

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,displayName,email} = user;
          console.log(uid,displayName,email)
          dispatch(updateUser({uid,displayName,email}))
        
        } else {
          dispatch(removeUser())
        }
      });

    return (
        <div className="w-screen h-screen">

           <RouterProvider router={routerr}/>

        </div>
    )
}

export default Body