import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import type { RootState } from '../../../store/store'
import QuestItem from './QuestItem'
import * as api  from '../api'

function QustionsList():JSX.Element {
  const dispatch = useDispatch()
  const themes = useSelector((store:RootState)=> store.qustionsState.themes)
  const user = useSelector((store:RootState)=> store.authState.user)
  const navigate = useNavigate()

  useEffect(()=> {
api.initFetchQuestions().then(data=>{
  if(!user){
    navigate('/')
  }
  dispatch({type:'themes/init',payload:data})
})
.catch(console.log)
  },[])
    
  return (
    <div className='questionList'>
{
  themes.map((theme)=><div key={theme.id} className='themes'><p className='theme'>{theme.name}</p>
  <div className='var'>{theme.Questions.map((question)=><QuestItem  question={question} key={question.id}/>)}</div> 

</div>)
}
    </div>
  )
}

export default QustionsList