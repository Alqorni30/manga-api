import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className=' text-center my-20'>
      <h2 className='text-white text-4xl mb-4 font-bold'>404 Page Not Found</h2>
      <div className="flex justify-center items-center gap-2 mb-2">
            <Link to={"/"} >
            <button className="hover:text-orange-400 flex justify-center items-center gap-2 text-white text-lg font-semibold"><AiOutlineHome/> back home | </button>
            </Link>
        </div>
    </div>
  );
};

export default NotFound;
