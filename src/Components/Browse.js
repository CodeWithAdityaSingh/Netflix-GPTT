import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import usePlayingNow from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContiner from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import GptSearch from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../utils/gptSlice";
import netflix from "../images/netflix.jpg";
import { USE_LANGUAGE2 } from "../utils/useLanguage";
import { changeAccorgingToLanguage } from "../utils/languageSlice";
import { useRef } from "react";





let Browse = () => {
  usePlayingNow();
  usePopular();

  let dispatch = useDispatch();

 let language = useRef(null)

 
 
 let selectInput = useSelector((store) => store.Gpt?.searchTextState);


  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          backgroundImage: `url('${netflix}')`,
        }}
        className="w-full h-full "
      >
        <div className="w-full -z-10 ">
          <div className="w-full flex justify-between  z-20  items-center   bg-black  absolute    ">
            <Header />

            {selectInput === true ? (
              <select ref={language}  className="absolute left-3/4 p-2 text-white bg-black opacity-85  " onClick={(e)=>{
                
                    dispatch(changeAccorgingToLanguage(language.current.value))
              }} >  
                {USE_LANGUAGE2.map((elem) => (
                  
                  <option  key={elem.id} value={elem.value} >{elem.value}</option>
                  
                ))}
              </select>
            ) : null}

        

            

            <div className="flex">
              <button
                className="bg-purple-900 p-3 m-7 rounded-md text-white font-semibold"
                onClick={() => {
                  dispatch(addState());
                }}
              >
                {selectInput? " Main Page" : "GPT Search"}
              </button>
              <button
                className=" rounded-md bg-black  text-white  p-2"
                onClick={() => {
                  signOut(auth)
                    .then(() => {})
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <img
                  className="w-10 m-2"
                  alt="img"
                  src="https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaSDR-kTPhPYcVVGSsV0jC3D-Q5HZSFE6fjzAM-4cMpltx1Gw9AV7OTnL8sYnC6CBxOBZQEAJLjStt822uD2lctOvNR05qM.png?r=962"
                ></img>
                signOut
              </button>
            </div>
          </div>

          {selectInput ? (
            <GptSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContiner />{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Browse;
