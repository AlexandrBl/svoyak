import React, { useEffect }  from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import QustionsList from '../Features/Questions/components/QustionsList';
import Main from '../Features/Main/redux/components/Main';
import Registration from '../Features/Auth/components/Registration';
import * as api from './api'
import type { RootState } from '../store/store';

function App(): JSX.Element {
  
  const dispatch = useDispatch()


  
  
useEffect(()=>{
   api.getUser()
   .then(data=>{
    dispatch({type:'auth/registration',payload:data})
   })
   .catch(console.log)   
  },[]
)

  return (
    
    
    <div className="App">

      

      <Routes>
        <Route path='/' element={<Main/>} >
          <Route index element={<Registration/>} />
          <Route path='/themes' element={<QustionsList />} />
        </Route>
      </Routes>
    </div>
  
  );

}

export default App;
