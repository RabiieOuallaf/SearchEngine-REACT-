import React , { createContext, useContext, useState } from 'react';

const resultContext = createContext(); 
const baseURL = 'https://google-search72.p.rapidapi.com/';

const resultContextProvider = ( { children } ) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    // /video /image /search ..
    const getResults = async (type) => {

        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`, {

            method: "GET",

            headers: {

                'X-RapidAPI-Key': '4024f83a50msh8d4f76535c6a95ap1d532djsnffa0ef36fa6b',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'

              }


        });

        const data = await response.json();


        setResults(data);
        setIsLoading(false);

    }

    return (
        <resultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading,  }}>
            {children}
        </resultContext.Provider>
    )


}

export const useResultContext = () => {
    useContext(resultContext);
}

