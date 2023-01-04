import React, {useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../context/ResultContextProvider';
import Loading from './Loading';

function Results() {

  const {getResults ,results, searchTerm, setSearchTerm, loading } = useStateContext();
  const location = useLocation();

  useEffect( () => {
    getResults('/');
  }, [] )


  if(loading) return <Loading />

  switch (location.pathname) {

    case '/search':

      return 'search'
      break;

    case '/images':
      return "IMAGES";
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