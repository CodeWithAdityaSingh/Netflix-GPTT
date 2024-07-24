import { USE_LANGUAGE } from "../utils/useLanguage";

import { useSelector } from "react-redux";



let GptSearchBar = ()=>{

    let selectLanguage = useSelector((store)=>store.changeLanguagee.language)


    if(selectLanguage === null ) return

    console.log(selectLanguage);

    return (

        <>
         <div className="flex items-center">
          

        <input className="m-4 w-3/4 p-3 rounded-md" type="text"  placeholder={USE_LANGUAGE[selectLanguage].placeholder}></input>
        <button className=" bg-red-700 font-semibold text-white w-32 h-12 rounded-md">{USE_LANGUAGE[selectLanguage].search}🔎</button>


         </div>

        
        </>
    )
}


export default GptSearchBar;