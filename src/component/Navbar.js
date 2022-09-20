import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar container  flex justify-between  h-[20vh] items-center m-auto'>
        <div className='logo text-5xl text-white'><NavLink className='m' to="/">AC.</NavLink></div>
        <ul className='list flex justify-around space-x-8 text-white '>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Project">Project</NavLink></li>
            <li><NavLink to="/Resume">Resume</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar