import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import usePlayingNow from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContiner from "./SecondaryContainer";

let Browse = () => {
 

 usePlayingNow()


  return (
  <div>
      <div className="w-full flex justify-between h-50 items-center p-4 bg-opacity-10 shadow-sm shadow-black   bg-black h-1/4 ">
      <Header />
      <button
        className=" rounded-md  bg-black text-white  p-2"
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
       <MainContainer/>

       {/* <SecondaryContiner/> */}
       
  </div>
  );
};

export default Browse;
