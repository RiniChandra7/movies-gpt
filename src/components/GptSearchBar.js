import React from 'react'
import { useSelector } from 'react-redux';
import { lang } from '../utils/langConstants';

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[10%] justify-center flex'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-10' placeholder={lang[langkey].gptSearchBarPlaceholder} />
            <button className='py-2 px-4 m-4 text-white col-span-2 bg-red-600 rounded-lg'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;