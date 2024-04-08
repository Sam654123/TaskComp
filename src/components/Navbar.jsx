import React from 'react'
import logo from '../assets/TaskComp.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-800 text-white'>
      <div className="logo flex">
        <img src={logo} alt="logo" className='ml-9 mr-3 w-7' />
        <span className="font-bold text-xl mr-9">TaskComp</span>
      </div>
      <ul className='flex gap-8 mx-9'>
        <li className="cursor-pointer hover:font-bold transition-all duration-200">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all duration-200">Info</li>
      </ul>
    </nav>
  )
}

export default Navbar
