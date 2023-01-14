import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google.serper.dev';

export const StateContextProvider = ({ children }) => {
    
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {


    setLoading(true);

    const  myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "b8bfad9d6f8e8828311248229f052c907e3f8698");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "q": "",
      "gl": "us",
      "hl": "en",
      "autocorrect": true
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };



    const res = await fetch(`${baseUrl}${url}`, requestOptions)

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