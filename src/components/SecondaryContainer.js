import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='md:-mt-52 mt-0 relative z-25 pt-20 md:px-12 px-4'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer