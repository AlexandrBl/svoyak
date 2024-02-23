import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import * as api from '../api'
import type { RootState } from '../../../store/store'

function Registration():JSX.Element {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')

    const [logReg, setLogReg] = useState(false)

    const dispatch = useDispatch()
    const message = useSelector((store:RootState)=>store.authState.message)

    

    const user = useSelector((store:RootState)=> store.authState.user)
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate('/themes')
          }
    },[user])

    

    const registration = (e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()
        if(password === password2){
            api.registrationFetch({name,email,password,score:0})
            .then(data=>{
            dispatch({type:'auth/registration',payload:data})
        })
            .catch(console.log)
        }else {
             dispatch({type:'auth/registration',payload:{message:'Ваши пароли не совпадают'}})
              }
        }

        const log = (e:React.FormEvent<HTMLFormElement>):void=>{
            e.preventDefault()
            api.logFetch({email,password})
            .then(data=>{
            dispatch({type:'auth/registration',payload:data})
            })
            .catch(console.log)
            }

  return (
    <dev className="container">
        <div className="contBut">
        <div className='contAuth'>
        <button onClick={()=>setLogReg(true)} className={logReg ? 'disabled' : ''} type='button'>reg</button>
        <button onClick={()=>setLogReg(false)} className={logReg ? '' : 'disabled'} type='button' >log</button>
        </div>

    {logReg && <form className='registration' onSubmit={registration}>
        <input className='regInp' type='text' value={name} placeholder='name'  onChange={(e)=>setName(e.target.value)}/>
        <input className='regInp' type='text' value={email} placeholder='email'  onChange={(e)=>setEmail(e.target.value)}/>
        <input className='regInp' type='password' value={password} placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
        <input className='regInp' type='password' value={password2} placeholder='erPassword'  onChange={(e)=>setPassword2(e.target.value)}/>
        <button type='submit'>registration</button>
    </form>}

    {!logReg && <form className='registration log' onSubmit={log}>
        
        <input className='regInp' type='text' value={email} placeholder='email'  onChange={(e)=>setEmail(e.target.value)}/>
        <input className='regInp' type='password' value={password} placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
        
        <button type='submit'>login</button>
    </form>}
    <div className='errRega err' >{message}</div>
</div>
    </dev>
  )
}

export default Registration