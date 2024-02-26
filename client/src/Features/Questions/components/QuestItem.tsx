import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import type { Quest } from '../type'
import '../Questions.css'
import * as api from '../api'
import * as apiApp from '../../../App/api'

function QuestItem({question}:{question:Quest}):JSX.Element {

  
  const [modals, setModals] = useState(false)
  const [disabled, setDisabled] = useState('false')


  const useLocals = (e:React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
    const mod = document.querySelector('.modals')
    const back = document.querySelector('background')
    
    const child = mod?.children

    const childArr = Array.prototype.slice.call( child )

    
    childArr.forEach(el=>{
      if(e.target !== mod && e.target === el || e.target === back){
        setModals(false)
        setDisabled('true')
        localStorage.setItem(`${question.question_text}`, 'true')
      }
    })
  }

  useEffect(()=>{
    const name = `${question.question_text}`

    if(!localStorage.getItem(name)) {
      localStorage.setItem(`${question.question_text}`, 'false')
    }
    setDisabled(localStorage.getItem(name)) 
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [message, setMessage] = useState('message')

  useEffect(()=>{    
    apiApp.getUser()
    .then(data=>{
     if(data.message === 'OK'){
       dispatch({type:'auth/registration',payload:data})
       
       if (!data.user) {
         navigate('/')
       }
     } 
    })
    .catch(console.log)  
   },[message])

 const choiceAnswer=(e:React.FormEvent<HTMLFormElement> )=>{
  e.preventDefault()
api.chekedAnswerFetch({id:question.id, idAnswer:e.target.answer.value}).then((data)=> {
  console.log(data);
  if(data.message === 'ok'){
    setMessage('Ответ верный!')
  }else{
    setMessage(`${data.message} Правильный ответ: ${data.rightAnswer.answer_text}`)
  }
  console.log(message);
  
}
)
.catch(console.log)
  }


  return (
    <>
    <button  type='button' className={disabled === 'true' ? 'disabled' : ''} onClick={
      ()=> setModals(true)
    } >{
        question.salary
        }
    </button>
{
  modals && 
  <div onClick={(event)=>{uselocals(event)}} className="background">
    <div className='modals'>

    <button className='buttonModals' type='button' onClick={useLocals} >x</button>
    <div className="img">
    {question.img_path && <img alt='...' src={question.img} />}
    </div>
    <h2 className='title'>{question.question_title}</h2>
    

    <form className='formOnSubmit' onSubmit={choiceAnswer}>
      {question.Answers.map((el)=>
      <div key={el.id}>
      <input className='radio' checked  id={el.id} type="radio" name='answer' value={el.id}/>
      <label className='queRadio' htmlFor={el.id}>{el.answer_text}</label> </div>)
      }
      <button className={message !== '' ? 'disabled' : ''} type='submit'>Проверить</button>
      <div className='answerErr'>{message}</div>
    </form>
  </div>
  </div>
}
    </>
  )
}

export default QuestItem