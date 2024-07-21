import { useDispatch } from "react-redux"
import { addMovie } from "../utils/moviesSlice"
import { useEffect} from "react"
import { API_OPTION } from "../utils/constance";

let usePlayingNow = ()=>{

 
    let dispatch = useDispatch()
    
    let nowPlayingMovie =  async ()=>{

     let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)

     let json = await data.json()

     dispatch(addMovie(json.results))


    }

    useEffect(()=>{

        nowPlayingMovie()


    },[])


   
}

export default usePlayingNow