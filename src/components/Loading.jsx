import React from 'react'
import loader from 'react-loader-spinner'
function Loading() {
  return (
    <div className='flex justify-center items-center '>

        <loader type="Puff" color="#00BFF" height={550} width={80}/>
        
    </div>
  )
}

export default Loading