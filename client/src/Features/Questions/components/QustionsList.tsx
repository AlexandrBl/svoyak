import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import QuestItem from './QuestItem'
import * as api  from '../api'

function QustionsList():JSX.Element {
const dispatch = useDispatch()
  const themes = useSelector((store:RootState)=> store.qustionsState.themes)

  useEffect(()=> {
api.initFetchQuestions().then(data=>{

// console.log(data)

  dispatch({type:'themes/init',payload:data})
})
.catch(console.log)
  },[])
    
  return (
    <div>
{
  themes.map((theme)=><><p>{theme.name}</p>
  <div>{theme.Questions.map(question=><QuestItem question={question} key={theme.id}/>)}</div> 

</>)
}
    </div>
  )
}

export default QustionsList