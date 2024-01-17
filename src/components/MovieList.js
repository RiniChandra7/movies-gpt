import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMovie } from '../utils/movieSlice';
import MovieModal from './MovieModal'; 

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();

  const handleMovieClick = (movie) => {
    console.log("Movie clicked");
    //console.log('Selected Movie Before Dispatch:', selectedMovie);
    dispatch(setSelectedMovie(movie));
  //console.log('Selected Movie After Dispatch:', selectedMovie);
    document.getElementById('my_modal_4').showModal();
  };

  const handleCloseModal = () => {
    dispatch(setSelectedMovie(null));
  };

  return (
    <div className='px-6'>
      <h1 className='md:text-3xl text-lg py-4 text-white'>{title}</h1>
      <div className={`grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-8`}>
        {movies?.map((movie) => (
          movie && (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              onClick={() => handleMovieClick(movie)}
            />
          )
        ))}
      </div>

      {/* Conditionally render the modal */}
        <MovieModal onClose={handleCloseModal} />
    </div>
  );
};

export default MovieList;
