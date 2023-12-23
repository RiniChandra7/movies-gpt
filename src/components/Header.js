import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, UserIcon } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        nav("/browse");
      } else {
        dispatch(removeUser());
        nav("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth).then(() => {
      nav("/");
    }).catch((error) => {
      nav("/error");
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b flex from-black z-10 w-screen justify-between'>
        <img 
            src={Logo}
            className='w-44'
            alt='logo'
        />
        { user && (
          <div className='flex p-2'>
            <button className='py-2 px-4 m-2 bg-red-800 text-white rounded-lg' onClick={handleGptSearchClick}>
              GPT Search
            </button>
            <img alt='usericon' className='w-12 h-12' src={UserIcon} />
            <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>
          </div>
        )}
    </div>
  )
}

export default Header;