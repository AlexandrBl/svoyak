import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import '../main.css'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import * as api from '../api'



function Header():JSX.Element {
    const user = useSelector((store:RootState)=>store.authState.user)
  
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    const logOut = ():void => {api.logOut()
    .then(data=>{
      dispatch({type:'auth/registration', payload: data})
      localStorage.clear()
      navigate('/')
    })
    .catch(console.log)
    }
    

    useEffect(()=>{
    }, [user])
  return (
    <nav className='nav'>
        {/* {!user && <NavLink to='/'>Регистрация</NavLink>} */}
        {/* {user && <NavLink to='/themes'> Игра</NavLink>} */}
       {/* {!user && <NavLink to='/registration'> Регистрация</NavLink>} */}
       {/* <NavLink to='/registration'> Регистрация</NavLink> */}
       {user && <p>{`Привет ${user.name}`}</p>}
       {user && <p>{`твой счет: ${user.score}`}</p>}
       {user && <button onClick={logOut} type='button' className="logOut">Выйти</button>}
    </nav>
  )
}

export default Header