import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className=' p-4 bg-gradient-to-r from-indigo-300 ... w-full mx-auto text-center space-x-16 text-violet-700 font-bold font-serif'>
       <Link to='/'>
         Home        
       </Link>
       <Link to='/pastes'>
          Pastes       
          </Link>
          
    </div>
  )
}

export default Navbar
