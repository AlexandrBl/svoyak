import React from 'react'
import { Quest } from '../type'

function QuestItem({question}:{question:Quest}):JSX.Element {
  return (
    <div>{
        question.id
        }</div>
  )
}

export default QuestItem