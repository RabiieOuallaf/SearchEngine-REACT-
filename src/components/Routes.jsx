import React from 'react'
import { Route,Navigate, Routes} from "react-router-dom";
import Results from './Results';

const Routing = () => {

  return (

    

    <div className='p-4'>

      <Routes>

        

        <Route exact path='/' element={<Navigate to='/search'/>}/>

        <Route exact path='/search' element={<Results />}/>

        <Route exact path='/news' element={<Results />}/>

        <Route exact path='/images' element={<Results />}/>
       
      </Routes>
        

    </div>

  )
}


export default Routing