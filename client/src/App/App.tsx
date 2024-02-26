import React, { useEffect }  from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import QustionsList from '../Features/Questions/components/QustionsList';
import Main from '../Features/Main/components/Main';
import Registration from '../Features/Auth/components/LogReg';
import * as api from './api'
import type { RootState } from '../store/store';
import QuestItem from '../Features/Questions/components/QuestItem';

function App(): JSX.Element {
  
  
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
useEffect(()=>{
   api.getUser()
   .then(data=>{
    if(data.message === 'ok'){
      dispatch({type:'auth/registration',payload:data})
      
      if (!data.user) {
        navigate('/')
      }
    } 
   })
   .catch(console.log)   
  },[])



  return (
    
    
    <div className="App">

      

      <Routes>
        <Route path='/' element={<Main/>} >
          <Route index  element={<Registration/>} />
          <Route path='/themes' element={<QustionsList />} />
        </Route>
      </Routes>
    </div>
  
  );

}

export default App;
