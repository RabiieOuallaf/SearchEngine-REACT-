import React, {useState} from 'react'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Results from './components/Results';
import Routing from './components/Routes';


const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);


  return (

    <div className={darkTheme ? 'dark' : ''} >

        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen"> 

            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Routing />
            <Results /> 
            <Footer />

        </div>

    </div>

    
  )

}

export default App