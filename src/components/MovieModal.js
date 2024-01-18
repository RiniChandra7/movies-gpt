import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';

const MovieModal = ({movie}) => {
  //const movie = useSelector((store) => store.movies.selectedMovie);

  if (!movie) {
    return null;
  }

  return (
    <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl text-black">
            <h3 className="font-bold text-lg">{movie.title}</h3>
            <div className='flex'>
                <div className="w-1/2 p-4">
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Overview:</b>  {movie.overview}</p>
                    <p><b>Original Title: </b> {movie.original_title}</p>
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
                    <button className="btn mr-4 text-white bg-red-500">Close</button>
                </form>
            </div>
        </div>
    </dialog>
  );
};

export default MovieModal;
