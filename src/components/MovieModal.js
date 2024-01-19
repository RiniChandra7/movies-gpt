import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL, TMDB_API_OPTIONS } from '../utils/constants';
import { lang } from '../utils/langConstants';

const MovieModal = ({movie}) => {
  const langkey = useSelector(store => store.config.lang);
  let ytLink = useRef(null);

  useEffect(() => {
    const getCurTrailer = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/' + movie.id + '/videos?language=en-US',
          TMDB_API_OPTIONS
        );
        const json = await data.json();

        const trailerVideos = json.results.filter((video) => video.type === 'Trailer');
        const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];

        if (trailer) {
          ytLink.current = 'https://www.youtube.com/watch?v=' + trailer?.key;
        } else {
          ytLink.current = null;
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    getCurTrailer();
  }, [movie]);

  if (!movie) {
    return null;
  }

  const goToTrailer = () => {
    if (ytLink.current)
        window.open(ytLink.current, '_blank');
  }

  return (
    <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl text-black">
            <h3 className="font-bold text-lg">{movie.title}</h3>
            <div className='flex'>
                <div className="w-1/2 p-4">
                    <p><b>{lang[langkey].releaseDate}:</b> {movie.release_date}</p>
                    <p><b>{lang[langkey].overview}:</b>  {movie.overview}</p>
                    <p><b>{lang[langkey].originalTitle}: </b> {movie.original_title}</p>
                    <button className="btn mr-4 text-white bg-red-500" onClick={goToTrailer}>{lang[langkey].watchTrailer}</button>
                </div>
                <div className="p-4 w-1/2 flex justify-end">
                    <img
                        src={IMG_CDN_URL + movie.poster_path}
                        alt={movie.title}
                        className='w-34 h-48 object-cover float-left rounded-lg border-red-700 border-solid border-4'
                    />
                </div>
            </div>
            
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn mr-4 text-white bg-red-500">{lang[langkey].close}</button>
                </form>
            </div>
        </div>
    </dialog>
  );
};

export default MovieModal;
