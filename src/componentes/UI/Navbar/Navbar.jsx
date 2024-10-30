import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href='/'>Inicio</a></li>
        <li><a href='/contactUs'>Contáctame</a></li>
        <li><a href='/aboutUs'>Acerca de Mi</a></li>
        <li><a href='*'>Rutas falsas</a></li>        
      </ul>
    </nav>
  )
}
