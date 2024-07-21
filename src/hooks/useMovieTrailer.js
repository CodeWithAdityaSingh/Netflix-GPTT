import { useEffect, useState } from "react"
import { API_OPTION } from "../utils/constance"

let useMovieTrailer = (id)=>{

    let [data,setData] = useState(null)

    let backgroundVideo = async()=>{

        let data = await fetch('https://api.themoviedb.org/3/movie/'+id+ '/videos?language=en-US', API_OPTION)
        let json = await data.json()

        let filterdata = json.results.filter((typo)=>{
             return typo.type === "Trailer"
        }) 

       let trailer = filterdata[0];

       
       setData(trailer)
    }

    useEffect(()=>{

     backgroundVideo()

     
    },[])


   return data    
}

export default useMovieTrailer;