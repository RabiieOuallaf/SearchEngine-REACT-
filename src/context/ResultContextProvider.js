import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
    
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('youcode school');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {

      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4024f83a50msh8d4f76535c6a95ap1d532djsnffa0ef36fa6b',
        'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
      }

    })

    const data = await res.json();


    setResults(data);


    setLoading(false);


  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);