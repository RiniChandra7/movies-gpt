import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackdrop from './VideoBackdrop';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];
    return (
        <div className="md:pt-0 bg-black pt-[30%]">
            <VideoTitle movie={mainMovie} />
            <VideoBackdrop movieId={mainMovie.id} />
        </div>
    )
}

export default MainContainer;