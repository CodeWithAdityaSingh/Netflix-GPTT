import { USE_LANGUAGE } from "../utils/useLanguage";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openAi from "../utils/openAI";

let GptSearchBar = () => {
  let selectLanguage = useSelector((store) => store.changeLanguagee.language);
  let searchText = useRef();

  if (selectLanguage === null) return;

  console.log(selectLanguage);

  return (
    <>
      <div className="flex items-center">
        <input
          ref={searchText}
          className="m-4 w-3/4 p-3 rounded-md"
          type="text"
          placeholder={USE_LANGUAGE[selectLanguage].placeholder}
        ></input>
        <button
          className=" bg-red-700 font-semibold text-white w-32 h-12 rounded-md"
          onClick={ async() => {
            const data = await openAi.chat.completions.create({
              messages: [{ role: "user", content: searchText.current.value }],
              model: "gpt-3.5-turbo",
            });

            console.log(data.choices);
          }}
        >
          {USE_LANGUAGE[selectLanguage].search}🔎
        </button>
      </div>
    </>
  );
};

export default GptSearchBar;
