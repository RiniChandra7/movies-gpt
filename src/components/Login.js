import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef(null);
  const pwd = useRef(null);
  const name = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleBtnClick = () => {
    let msg;
    if (!isSignInForm) {
      msg = validateData(name.current.value, email.current.value, pwd.current.value);
    }
    else {
      msg = validateData(null, email.current.value, pwd.current.value);
    }
    console.log(msg);
    setErrMsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, pwd.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode + "-" + errorMessage)
        // ..
      });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode + "-" + errorMessage)
      });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg'
          alt='all-movies'
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-1/4 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-2 my-4 w-full bg-gray-700'
            required
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-2 my-4 w-full bg-gray-700'
          required
        />
        <input 
          ref={pwd}
          type='password'
          placeholder='Password'
          className='p-2 my-4 w-full bg-gray-700'
          required
        />
        <p className='text-red-700 font-bold text-lg py-2'>{errMsg}</p>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleBtnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4' onClick={toggleSignIn}>{isSignInForm ? "New to MoviesGPT? Sign Up Now" : "Already a user? Sign in now"}</p>
      </form>
    </div>
  );
}

export default Login;