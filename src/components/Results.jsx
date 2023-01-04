import React, {useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../context/ResultContextProvider';
import Loading from './Loading';

function Results() {

  const {getResults ,results, searchTerm, setSearchTerm, loading } = useStateContext();
  const location = useLocation();

  useEffect( () => {
    if(searchTerm){

      if(location.pathname === "/video"){

        getResults(`/search/q=${searchTerm} videos`);

      }else {
        getResults(`${location.path}/q=${searchTerm}&num=20`)
      }
    }

  }, [searchTerm, location.pathname] )


  if(loading) return <Loading />

  switch (location.pathname) {

    case '/search':

      return (
        <div className='flex flex-wrap justify-center space-y-6 sm:px-56'>

          {results ?.results ?.map( ({link,title}, index) =>  {
            <div key={index} className="md:w-2/5 w-full ">

              <a href={link} target="_blank" rel='noreferrer'>

                <p className='text-sm'>

                  {link.length > 30 ? link.substring(0, 30) : link}

                </p>

                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700 '>

                  {title}

                </p>

              </a>

            </div>
          })}

        </div>
      )
      break;

    case '/images':
      return (<div className='flex flex-wrap justify-center items-center'>
        {results?.image_result?.map( ({image , link: {href, title}}, index) =>  {
          <a className='sm:p-3 p-5' href={href} key={index} target="_blank" rel="noreferrer">

            <img src={image?.src} alt={title} loading="lazy"/>
            <p className='w-36 break-words text-sm mt-2'>
              {title}
            </p>
          </a>
        })}
      </div>)
      
      break;

    case '/news':
      return "NEWS";
      break;
    case '/videos':
    return "NEWS";
    break;

    default:
      
      return "erorr!";

  }
}

export default Results