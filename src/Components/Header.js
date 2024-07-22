import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser, updateUser } from "../utils/userslice";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

let Header = () => {
  let navigate = useNavigate();

  let dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email
          } = user;
        // console.log(uid, displayName, email);
        dispatch(updateUser({ uid, displayName, email }));
        navigate("/browser");
      } else {
        dispatch(removeUser());

        navigate("/");
      }
    });
  }, []);

  return (
    <div className="  ">
      <img
        className=" w-56 "
        src="
              https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      ></img>
    </div>
  );
};

export default Header;
