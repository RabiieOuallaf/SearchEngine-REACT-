import React from 'react'
import { Route,Navigate, Routes} from "react-router-dom";
import Results from './Results';

const Routing = () => {

  return (

    

    <div className='p-4'>

      <Routes>  

        <Route exact path='/images' element={<Results />}/>
        
      </Routes>
        

    </div>

  )
}


export default Routing