import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMovie } from '../utils/movieSlice';
import MovieModal from './MovieModal';
import { lang } from '../utils/langConstants';

const VideoTitle = ({movie}) => {
  const curmovie = useSelector((store) => store.movies.selectedMovie);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const langkey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const handleMovieClick = () => {
    dispatch(setSelectedMovie(movie));
    if (curmovie)
      document.getElementById('my_modal_4').showModal();
  };

  const goToTrailerSrc = () => {
    window.open("https://www.youtube.com/watch?v="+trailerVideo?.key, '_blank');
  }

  return (
    <div className='w-screen aspect-video pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-6xl text-2xl font-bold'>{movie.title}</h1>
        <p className='py-6 text-lg w-1/2 hidden lg:inline-block'>{movie.overview}</p>
        <div>
            <button className='bg-white hidden lg:inline-block text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80' onClick={goToTrailerSrc}>{lang[langkey].trailerSrcRedirect}</button>
            <button className='mx-2 hidden lg:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opcaity-50 rounded-lg' onClick={handleMovieClick}>{lang[langkey].moreInfo}</button>
        </div>
        <MovieModal movie={curmovie} />
    </div>
  );
};

export default VideoTitle;