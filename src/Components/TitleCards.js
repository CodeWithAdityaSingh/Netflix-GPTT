import { IMG_URL_CDN } from "../utils/constance";

let TitleCard = ({ titleCard }) => {
  const { poster_path } = titleCard;

  return (
    <div>
      <div className="m-2 rounded-lg  w-40  cursor-pointer  ">
        <img
          className=""
          alt="cardPoster"
          src={IMG_URL_CDN + poster_path}
        ></img>
      </div>
    </div>
  );
};

export default TitleCard;
