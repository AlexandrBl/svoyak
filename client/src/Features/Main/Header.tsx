
import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Header():JSX.Element {
  return (
    
      <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">Главная</Link>
        </li>
        {/* <li className="nav__item">
          <Link to="/restaurants" className="nav__link">Рестораны</Link>
        </li> */}
      </ul>
    </nav>
    
  )
}

export default Header