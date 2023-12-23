import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { MOVIE_BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-20'>
            <img 
                src={MOVIE_BG_URL}
                alt='all-movies'
            />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;