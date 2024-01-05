import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { MOVIE_BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-20'>
          <img 
              src={MOVIE_BG_URL}
              alt='all-movies'
              className="h-screen object-cover md:w-screen"
          />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch;