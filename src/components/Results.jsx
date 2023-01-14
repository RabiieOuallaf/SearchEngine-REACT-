import React, {useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useStateContext } from '../context/ResultContextProvider';
import Load from './Loading';

function Results() {

  const {getResults ,results, searchTerm, setSearchTerm, loading } = useStateContext();
  const location = useLocation();

  

  useEffect(() => {
    if (searchTerm !== '') {
      
      getResults(`${location.pathname}?q=${searchTerm}&freshness=Day&textFormat=Raw&safeSearch=Off&mkt=en-us`);
      
    }
  }, [searchTerm, location.pathname]);

  
  if(loading) return <Load />

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.organic?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                <p className="hover:underline dark:text-blue-500 text-blue-900"></p>
              </a>
            </div>
          ))}
        </div>
      );
      case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.images?.map(({ imageUrl, link, title }, index) => (
            <a href={link} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5 ">
              <img src={imageUrl} alt={title} loading="lazy" className='w-36'/>
              <p className="sm:w-36 w-36 break-words text-lg mt-2 text hover:text-blue-900 hover:underline">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/places':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          Working on this feature!
        </div>
      );
    
    default:
      return 'Error...';
  }
};

export default Results