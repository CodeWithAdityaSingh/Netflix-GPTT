
import { useEffect } from "react"
import { API_OPTION } from "../utils/constance"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"



let usePopular = ()=>{
   let dispatch = useDispatch()
   
   let fechData = async ()=>{

     let data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)


     let json = await data.json()
    

     dispatch(addPopularMovies(json.results))
   }

   useEffect(()=>{
      fechData()
   },[])


}


export default usePopular