import React, { useEffect, useState } from 'react'
import type { Quest } from '../type'
import '../Questions.css'
import * as api from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import * as apiApp from '../../../App/api'
import { useNavigate } from 'react-router'

function QuestItem({question}:{question:Quest}):JSX.Element {
  const [modals, setModals] = useState(false)
  const [disabled, setDisabled] = useState('false')


  const useLocals = ():void => {
    setModals(false)
    setDisabled('true')
    localStorage.setItem(`${question.question_text}`, 'true')
  }

  useEffect(()=>{
    const name = `${question.question_text}`

    if(!localStorage.getItem(name)) {
      localStorage.setItem(`${question.question_text}`, 'false')
    }
    
    setDisabled(localStorage.getItem(name))    
  },[])

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [message, setMessage] = useState('')

  useEffect(()=>{
    apiApp.getUser()
    .then(data=>{
     if(data.message === 'ok'){
       dispatch({type:'auth/registration',payload:data})
       
       if (!data.user) {
         navigate('/')
       }
     } 
    })
    .catch(console.log)   
   },[message])
  // const answers = useSelector((store:RootState)=>store.qustionsState.themes.)

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
  <div className="background">
    <div className='modals'>

    <button type='button' onClick={useLocals} >x</button>
    <h2>{question.question_text}</h2>
    {question.img_path && <img src={question.img_path} />}
    

    <form onSubmit={choiceAnswer}>
      {question.Answers.map((el)=>
      <>
      <input className='radio' checked  id={el.id} type="radio" name='answer' value={el.id}/>
      <label className='queRadio' htmlFor={el.id}>{el.answer_text}</label> </>)
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