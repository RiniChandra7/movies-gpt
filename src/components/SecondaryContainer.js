import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { lang } from '../utils/langConstants';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    const langkey = useSelector(store => store.config.lang);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='md:-mt-52 mt-0 relative z-25 pt-20 md:px-12 px-4'>
          <MovieList title={lang[langkey].nowPlaying} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer