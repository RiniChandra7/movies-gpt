import React, { useEffect, useRef, useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setHasOverflow(container.scrollWidth > container.clientWidth);
    }
  }, [movies]);

  return (
    <div className='px-6'>
      <h1 className='md:text-3xl text-lg py-4 text-white'>{title}</h1>
      <div
        ref={containerRef}
        className={`flex ${hasOverflow ? 'overflow-x-hidden hover:overflow-x-scroll' : ''}`}
      >
        <div className='flex'>
          {movies?.map(movie => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
