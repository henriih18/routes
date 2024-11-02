import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/contactUs'>Contáctame</NavLink></li>
        <li><NavLink to='/aboutUs'>Acerca de Mi</NavLink></li>
        <li><NavLink to='*'>Rutas falsas</NavLink></li>        
      </ul>
    </nav>
  )
}
