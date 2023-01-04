import React, {useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../context/ResultContextProvider';
import Loading from './Loading';

function Results() {

  const {getResults ,results : {results, image_result, entries: news}, searchTerm, setSearchTerm, loading } = useStateContext();
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

          {results?.map( ({link,title}, index) =>  {
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
        {image_result?.map( ({image , link: {href, title}}, index) =>  {
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
      return (
        <div className='flex flex-wrap justify-center space-y-6 sm:px-56 items-center'>

          {results ?.entries ?.map( ({links,id, source, title}) =>  {
            <div key={id} className="md:w-2/5 w-full ">

              <a href={links?.[0].href} target="_blank" rel='noreferrer' className='hover:underline'>

                

                <p className='text-lg  dark:text-blue-300 text-blue-700 '>

                  {title}

                </p>

                <div className="flex gap-4 ">
                  <a href={source?.href} target="_blank" rel='noreferrer'>
                    {source?.href}
                  </a>
                </div>

              </a>

            </div>

          })}

          </div>)
      break;
    case '/videos':
    return (
      <div className='flex flex-wrap'>
        {results.map( (video, index) =>  {
          <div key={index} className='p-2'>
              <ReactPlayer url={video.additional_links[0].href } controls width="355px" height="200px"/>
          </div>
        })}
      </div>
    );
    break;

    default:
      
      return "erorr!";

  }
}

export default Results