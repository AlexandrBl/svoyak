import React, { useState } from 'react'
import type { Quest } from '../type'
import '../Questions.css'

function QuestItem({question}:{question:Quest}):JSX.Element {
  const [modals, setModals] = useState(false)
  const [disabled, setDisabled] = useState(false)



  return (
    <>
    <button type='button' className={disabled ? 'disabled' : ''} onClick={
      ()=> setModals(true)
    } >{
        question.id
        }
    </button>
{
  modals && 
  <div className="background">
    <div className='modals'>
    <button type='button' onClick={()=>{
      setModals(false)
      setDisabled(true)
      }} >x</button>
    <h2>{question.question_text}</h2>
  </div>
  </div>
}
    </>
  )
}

export default QuestItem