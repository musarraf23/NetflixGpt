import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email =  useRef(null);
  const password = useRef(null);

  const handleButtonClick=()=>{
    const message =checkValidData(email.current.value , password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
      .then((userCredential)=>{
        const user = userCredential.user;
        updateProfile(user,{
          displayName : name.current.value,
          photoURL: USER_AVATAR,
        }).then(()=>{
          const {uid , email , displayName,photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email : email,
              displayName:displayName,
              photoURL:photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
    else{
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
      .then((userCredential)=>{
        //Signed in
        const user = userCredential.user;
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" + errorMessage);
      })
    }
   
  }
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header/>
      <div>
        <img className='' src ={BG_URL} alt = "logo" />

      </div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm && (
            <input ref={name} type='text' placeholder='Full Name' className='' />
          )
        }
        <input ref={email} type='text' placeholder='Email Adress' className='' />
        <input ref={password} type='text' placeholder='Password' className=''/>
        <p>{errorMessage}</p>
        <button onClick={handleButtonClick} >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='' onClick={toggleSignInForm}>
          {isSignInForm ? "New to netflix ? Sign Up Now" : "Already registered? Sign in Now."}
        </p>
      </form>
    </div>
  )
}

export default Login
