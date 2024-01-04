import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlaying = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_API_OPTIONS);
  
      const json = await data.json();
      dispatch(addNowPlaying(json.results));
    }
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlaying();
    }, []);
};

export default useNowPlaying;