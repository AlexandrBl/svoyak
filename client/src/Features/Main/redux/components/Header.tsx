import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../main.css'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'



function Header():JSX.Element {
  const user = useSelector((store:RootState)=>store.authState.user)

// const user = useSelector((store:RootState)=>store.authState.user)
  return (
    <nav className='nav'>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/themes'> Игра</NavLink>
       {!user && <NavLink to='/registration'> Регистрация</NavLink>}
       {/* <NavLink to='/registration'> Регистрация</NavLink> */}
       {user && <p>{`Привет ${user.name}`}</p>}
    </nav>
  )
}

export default Header