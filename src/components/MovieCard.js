import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedMovie } from '../utils/movieSlice';

const MovieCard = ({posterPath, movie, onClick}) => {
  if (!posterPath) return null;

  return (
    <div className='md:w-48 w-36 pr-4 cursor-pointer' onClick={onClick}>
      <img alt='Movie Poster' src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard