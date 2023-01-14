import React from 'react'
import { Route,Navigate, Routes} from "react-router-dom";
import Results from './Results';

const Routing = () => {

  return (

    

    <div>

      <Routes>  
        <Route exact path='/' element={<Navigate to='/search' />}/>

        <Route exact path='/search' element={<Results />}/>
        
        <Route exact path='/images' element={<Results />}/>
        
      </Routes>
        

    </div>

  )
}


export default Routing