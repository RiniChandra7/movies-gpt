import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', TMDB_API_OPTIONS);
        const json = await data.json();
    
        const trailerVideos = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      }
    
    useEffect(() => {
        getMovieTrailer();
    }, []);
};

export default useMovieTrailer;