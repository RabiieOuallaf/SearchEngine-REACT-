import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {url: '/search', text: '🔍All'},
    {url: '/places', text: '🗺️places'},
    {url: '/images', text: '📷Pictures'},
]

export const Links = () => {
  return (

    <div className='flex sm:justify-around justify-betweem items-center mt-4'>
        
        {links.map(({url, text}, index) => (
            <NavLink to={url} className="m-2 mb-0" key={index}activeclassname="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">

                {text}

            </NavLink>
        ))}
        
    </div>

  )
}

