import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;

  return (
    <div className='md:w-48 w-36 pr-4'>
      <img alt='Movie Poster' src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard