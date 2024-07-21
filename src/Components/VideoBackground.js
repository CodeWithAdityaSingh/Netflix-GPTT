
import useMovieTrailer from '../hooks/useMovieTrailer'

let VideoBackground = ({teaserid})=>{
   
    const{id} = teaserid

    let movieTrailer = useMovieTrailer(id)

    if(movieTrailer === null) return

    console.log(movieTrailer.key);
 

    return (
     <>
     
        <h1>{}</h1>

        <div><iframe width="560" height="315" src="https://www.youtube.com/embed/L4DrolmDxmw?si=6NeVbU_77YbKjvvx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe></div>
     </>
    )
}

export default VideoBackground