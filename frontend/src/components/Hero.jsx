import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const[query,setQuery]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const searchJobHandler = () =>{
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }
  
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Job Hunt Website</span>
        <h1 className='text-5xl font-bold'>
          Search, Apply & <br />
          Get Your <span className='text-[#6a38c2]'>Dream Jobs</span>
        </h1>
        <p className='text-gray-600 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti odio suscipit eius tempora laborum?
        </p>
        <div className='flex w-full sm:w-[60%] md:w-[40%] shadow-md border border-gray-300 pl-3 rounded-full items-center gap-2 mx-auto'>
          <input
            type="text"
            placeholder="Find your dream jobs"
            aria-label="Search for dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full'
          />
          <Button onClick={searchJobHandler} className='rounded-full bg-[#6a38c2] text-white hover:bg-[#5a2ea8] hover:scale-105 transition-all duration-300 ease-in-out'>
            <Search className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
