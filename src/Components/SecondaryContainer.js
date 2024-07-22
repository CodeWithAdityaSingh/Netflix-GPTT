import Title from "./Title";
import { useSelector } from "react-redux";

import usePopular from "../hooks/usePopular";

let SecondaryContiner = () => {
  let movieCard = useSelector((store) => store.movies.movie);

  let popularMovieSelector = useSelector((store)=>store.movies.popularMovies)

  console.log(popularMovieSelector);
  
  usePopular()


  if (movieCard === null) return;

  if(!popularMovieSelector)  return;


  return (



    <div className= "bg-black z-40 -mt-80">

    <div className=" text-white   bg-opacity-10 relative ">
      <Title title={"Now Playing"} movieCard = {movieCard} />
      <Title title={"Award-Winning Film"} movieCard = {popularMovieSelector} />
      <Title title={"Childrean and Family TV"} movieCard = {movieCard} />
      <Title title={"Horror"} movieCard = {movieCard} />
      <Title title={"Up Coming"} movieCard = {movieCard} />
    </div>

    </div>

  );
};

export default SecondaryContiner;
