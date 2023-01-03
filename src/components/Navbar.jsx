import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = ({darkTheme , setDarkTheme}) => {



  return (

    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <Search />
        <div className="flex justify-between items-center space-x-5 w-screen">

          <Link to='/'>

              <p className='text-2xl bg-blue-800 text-white font-bold text-white py-1 px-2 dark:bg-gray-50 dark:text-black'>
                Yousearch🔎
              </p>

          </Link>
          <button type='button' onClick={ () => setDarkTheme(!darkTheme) } className='text-xl  dark:text-gray-900 bg-white border rounded-full py-1 px-2 hover:shadow-lg'>

            {darkTheme ?  '☀️' : '🌕' }

            

          </button>


        </div>
        
    </div>
  )
}

export default Navbar;