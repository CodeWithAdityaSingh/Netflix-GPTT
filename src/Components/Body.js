import Browse from "./Browse"
import Login from "./Login"
import {createBrowserRouter,RouterProvider} from "react-router-dom";

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

    

    return (
        <div className="w-screen h-screen">

           <RouterProvider router={routerr}/>

        </div>
    )
}

export default Body