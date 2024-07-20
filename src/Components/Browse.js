import Header from "./Header"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";


let Browse = ()=>{
    let navigate = useNavigate()



    return (

        <div className="w-full flex justify-between h-50 items-center p-4 ">
            <Header/>
            <button className="text-black bg-red-500 p-4" onClick={()=>{
                 

                 signOut(auth).then(() => {
      
                    
                    navigate("/")

                

                  }).catch((error) => {
                    console.log(error)
                  });

                    
         

            }}>signout</button>
        </div>
    )
}

export default Browse