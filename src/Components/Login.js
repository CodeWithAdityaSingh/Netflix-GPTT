import Header from "./Header";
import netflix from "../images/netflix.jpg";
import { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

let Login = () => {
  let [toggleButton, setToggleButton] = useState(true);

  let [error, setError] = useState(null);

  let nevigate = useNavigate()

  let email = useRef(null);
  let password = useRef(null);

  let userValidation = (email, password) => {
    let setEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    let setPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!setEmail) return "Email ID is not valid";
    if (!setPassword) return "Password is not valid";
    else return null;
  };

  return (
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
      <Header />

      <div className="w-full h-3/4 flex justify-center  ">
        <div className="w-3/12 bg-opacity-80   bg-black p-10 absolute  text-center  rounded-lg ">
          <span className="text-white opacity-75 w-full font-bold text-4xl  ">
            {toggleButton === true ? "Sign-In" : "Sign-up"}
          </span>

          {!toggleButton && (
            <div className="m-4 w-full">
              {" "}
              <input
                className="h-8 opacity-75 text-white rounded-md  placeholder:text-white  bg-slate-500 w-full p-6"
                type="text"
                placeholder="Enter Name"
              />
            </div>
          )}

          {!toggleButton && (
            <div className="m-4 w-full">
              {" "}
              <input
                className="h-8 opacity-75 text-white rounded-md  placeholder:text-white  bg-slate-500 w-full p-6"
                type="number"
                placeholder=" Phone No"
              />
            </div>
          )}

          <div className="m-4 w-full">
            {" "}
            <input
              ref={email}
              className="h-8 opacity-75 text-white rounded-md  placeholder:text-white  bg-slate-500 w-full p-6"
              type="text"
              placeholder="Enter Email"
            />
          </div>

          <div className="m-4 w-full">
            {" "}
            <input
              ref={password}
              className="h-8 text-white rounded-md bg-slate-500 opacity-75 placeholder:text-white w-full p-6"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <p className="text-red-600 text-left ml-4">{error}</p>

          <div className="m-4 w-full">
            <button
              className="text-white rounded-md w-full font-semibold bg-red-700  opacity-75 p-2"
              onClick={() => {
                let error1 = userValidation(
                  email.current.value,
                  password.current.value
                );
                
                setError(error1)
                

         

                if (error1) return;

                if (!toggleButton) {


                  // let auth = getAuth()
                  
                  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

                    .then((userCredential) => {
                      // Signed up
                      const user = userCredential.user;
                    })

                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      setError(error + " " + errorMessage)
 // ..
                    });
                }

                if (toggleButton) {
                  
                  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                      // Signed in 
                      const user = userCredential.user;
                      console.log(user)
                      nevigate('/browser')
                      // ...
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;

                      setError(errorCode + " " + errorMessage)
                      console.log(errorCode,errorMessage)
                     
                    });
                  

                }
              }}
            >
              {toggleButton === true ? "Sign-In" : "Sign-Up"}
            </button>
          </div>

          <h3 className="text-white w-full ml-3 ">OR</h3>
          <div className="m-4 w-full rounded-md  opacity-75  bg-slate-800  ">
            <button
              className="text-white p-2 font-semibold w-full "
              onClick={() => {
                toggleButton === true
                  ? setToggleButton(false)
                  : setToggleButton(true);
              }}
            >
              {toggleButton === true
                ? "Create An Account"
                : "Already Registered? Sign-In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
