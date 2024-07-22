import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import  VideoBackground from "./VideoBackground"

let MainContainer = ()=>{


    const movies = useSelector((store)=>store?.movies?.movie)

 
    
    if(movies === null) return

     let mainMovie = movies[0]

  
     

     
    return (
      <div>
        
         <VideoTitle data = {mainMovie}/>
         <VideoBackground teaserid = {mainMovie}/>
      </div>
    )
}

export default MainContainer