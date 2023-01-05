import React, {useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useStateContext } from '../context/ResultContextProvider';
import Loading from './Loading';

function Results() {

  const {getResults ,results, searchTerm, setSearchTerm, loading } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}?q=${searchTerm}&freshness=Day&textFormat=Raw&safeSearch=Off&mkt=en-us`);
      }
    }
  }, [searchTerm, location.pathname]);



  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
        </div>
      );
    
    default:
      return 'Error...';
  }
};

export default Results