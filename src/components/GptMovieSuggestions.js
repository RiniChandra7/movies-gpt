import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { lang } from '../utils/langConstants';

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);
  const langkey = useSelector(store => store.config.lang);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        {
          (movieResults.length == 0 || movieResults.every((m) => m == null)) ? 
            <p>{lang[langkey].noGptSuggestions}</p>
            :
            <MovieList title={lang[langkey].recommendedMovies} movies={movieResults} className={`${movieResults.length > 3 ? 'flex-wrap' : ''}`} />
        }
    </div>
  )
}

export default GptMovieSuggestions;