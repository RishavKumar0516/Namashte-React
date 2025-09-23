import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

// There are two ways to read the data from input box
// 1. By using state
// 2. By using ref

// By using state we can add the event on the input box and read it as soon as the user type something

// by using ref we will need to reference those input box and this reference is created by react, using useRef hook

// In HTML forms, when you put a button inside a <form> and give it type="submit" (or no type at all, since the default is "submit"), clicking it will:

// Trigger the form submission event.

// The browser will then send the form data and by default reload/refresh the page.

// This is why you’re seeing the page refresh when you click your button.

// you usually don’t want the page to reload. Instead, you can stop the default behavior:

// Use e.preventDefault() inside your onSubmit handler to stop the page reload.

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSignInForm = (val) => {
    setIsSignInForm(val);
  };

  const initializeRef = () => {
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (userName.current) userName.current.value = "";
    setErrorMessage("");
  };

  const handleButtonClick = () => {
    // email.current will refer to the input box
    // email.current.value will refer to the value of the input box
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const name = userName?.current?.value || "";

    const messages = checkValidateData(emailValue, passwordValue, name);
    console.log("messages", messages);
    setErrorMessage(messages);

    if (messages) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          initializeRef();
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} ${errorMessage}`);
        });
    } else {
      console.log("Sign up called");
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          initializeRef();
          navigate("/browse");
          const { uid, email, displayName, photoURL } = auth.currentUser;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);
          setErrorMessage(`${errorCode} ${errorMessage}`);
          // ..
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="banner"
        />
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="absolute p-12 left-0 w-4/12 bg-black my-36 mx-auto mt-40 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-700 rounded-md border-2 border-gray-500 focus:outline-2 focus:outline-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-700 rounded-md border-2 border-gray-500 focus:outline-2 focus:outline-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded-md border-2 border-gray-500 focus:border-2 focus:border-gray-500 focus:outline-1 focus:outline-white"
        />

        <p className="py-4 text-sm text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-2 my-2 w-full bg-red-600 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p
            className="py-4 text-sm cursor-pointer"
            onClick={() => toggleSignInForm(false)}
          >
            New to Netflix? <span className="text-red-600">Sign up</span>
            &nbsp;now.
          </p>
        ) : (
          <p
            className="py-4 text-sm cursor-pointer"
            onClick={() => toggleSignInForm(true)}
          >
            Already registered? <span className="text-red-600">Sign In</span>
            &nbsp; now.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
