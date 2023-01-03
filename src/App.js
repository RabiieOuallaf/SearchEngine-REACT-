import React, {useState} from 'react'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Routing from './components/Routes';


const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);


  return (

    <div className={darkTheme ? 'dark' : ''} >

        <h1 className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen"> 
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Routing />
            <Footer />
        </h1>

    </div>

    
  )

}

export default App