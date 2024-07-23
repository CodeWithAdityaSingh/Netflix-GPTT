import useMovieTrailer from "../hooks/useMovieTrailer";

import { useSelector } from "react-redux";

let VideoBackground = ({ teaserid }) => {
  const { id } = teaserid;

  let movieTrailer = useMovieTrailer(id);

  let key = useSelector((store) => store?.movies?.setKey);

  if (movieTrailer === null) return;

  return (
    <div>
      <div className="  ">
        <iframe
        className="w-full aspect-video  "
         
          src={"https://www.youtube.com/embed/" + key.key + "?&autoplay=1&mute=1"}
          si="6NeVbU_77YbKjvvx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
