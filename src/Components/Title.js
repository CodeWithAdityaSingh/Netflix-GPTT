

import TitleCard from "./TitleCards";

let Title = ({ movieCard, title }) => {

 


  return (
    <div className="overflow-x-scroll w-full     ">
      <div className="sticky left-4 text-2xl font-Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif; mt-3">{title}➡️</div>
      <div className="flex">
        {movieCard.map((eachcard) => {
          return <TitleCard key={eachcard.id} titleCard={eachcard} />;
        })}
      </div>
    </div>
  );
};

export default Title;
