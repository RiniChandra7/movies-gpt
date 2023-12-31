import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../utils/langConstants';
import openai from '../utils/openAi';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+movie.substring(0, movie.indexOf('(')).trim()+'&include_adult=false&language=en-US&page=1', TMDB_API_OPTIONS);

    const json = await data.json();
    console.log(json.results);

    const releaseDate = movie.substring(movie.indexOf('(') + 1, movie.indexOf(')'));
    console.log(releaseDate);
    //return json.results;

    const res = json.results.filter((resMovie) => 
      resMovie.release_date == releaseDate
    );
    console.log(res);
    
    if (res.length > 0) {
      return res[0];
    }
    else {
      return null;
    }
  }

  const handleGptSearchClick = async () => {
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query "+ searchText.current.value + ". Give me a list of names of just 7 comma separated movies with their respective release dates in YYYY-DD-MM format like the given example. Example: MovieName1 (YYYY-DD-MM), MovieName2 (YYYY-DD-MM), MovieName3 (YYYY-DD-MM), MovieName4 (YYYY-DD-MM), MovieName5 (YYYY-DD-MM)";
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
    
    console.log(gptResults.choices[0]?.message.content);
    const gptMovies = gptResults.choices[0]?.message.content.split(",");
    console.log(gptMovies);

    const proms = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbRes = await Promise.all(proms);
    console.log(tmdbRes);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbRes}));
  }

  return (
    <div className='pt-[40%] md:pt-[10%] justify-center flex'>
        <form className='bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={searchText} className='p-4 m-4 col-span-10' placeholder={lang[langkey].gptSearchBarPlaceholder} />
            <button className='py-2 px-4 m-4 text-white col-span-2 bg-red-600 rounded-lg' onClick={handleGptSearchClick}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;