import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, SUPPORTED_LANG, UserIcon } from '../utils/constants';
import { toggleGptSearchView, addGptMovieResult } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    if (!showGptSearch) {
      dispatch(addGptMovieResult({movieNames: null, movieResults: null}));
    }
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b flex from-black z-10 w-screen justify-between flex-col md:flex-row'>
        <img 
            src={Logo}
            className='w-44 mx-auto md:mx-0'
            alt='logo'
        />
        
        { user && (
          <div className='flex p-2 mx-auto md:mx-0'>
            {
              showGptSearch &&
              (
                <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLangChange}>
                  {SUPPORTED_LANG.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                </select>
              )
            }
            
            <button className='py-2 px-4 m-2 bg-red-800 text-white rounded-lg' onClick={handleGptSearchClick}>
              {
                !showGptSearch ? "GPT Search" : "HomePage"
              }
            </button>
            <img alt='usericon' className="w-12 h-10 mt-[9px] ml-[9px]" src={UserIcon} />
            <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>
          </div>
        )}
    </div>
  )
}

export default Header;