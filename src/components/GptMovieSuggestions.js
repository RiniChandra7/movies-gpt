import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);

  if (!movieNames) return null;
  console.log(movieNames);
  console.log(movieResults);

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        <MovieList title={'Recommended Movies'} movies={movieResults} />
      </div>
    </div>
  )
}

export default GptMovieSuggestions;