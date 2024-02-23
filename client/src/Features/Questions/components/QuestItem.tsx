import React, { useEffect, useState } from 'react'
import type { Quest } from '../type'
import '../Questions.css'

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

  return (
    <>
    <button type='button' className={disabled === 'true' ? 'disabled' : ''} onClick={
      ()=> setModals(true)
    } >{
        question.id
        }
    </button>
{
  modals && 
  <div className="background">
    <div className='modals'>
    <button type='button' onClick={useLocals} >x</button>
    <h2>{question.question_text}</h2>
  </div>
  </div>
}
    </>
  )
}

export default QuestItem