import React, { useMemo, useReducer } from 'react';
import { Route, Routes } from 'react-router';
import Main from '../Features/Main/Main';
import ReatarauntsList from '../Features/Restaurants/ReatarauntsList';

import './App.css';
import reducer, { init } from '../Reducer/reducer';
import { appContext } from '../Context/context';
import RestarauntPage from '../Features/Restaurants/RestarauntPage';

function App(): JSX.Element {
  
  const [state, dispatch] = useReducer(reducer, init)
  
  const memo = useMemo(()=>({state, dispatch}), [state, dispatch]) 


  return (
    <appContext.Provider value = {memo}>
    
    
    <div className="App">

      

      <Routes>
        <Route path='/' element={<Main/>} >
          <Route index  element={<ReatarauntsList/>} />
          <Route path='restaurant/:name' element={<RestarauntPage />} />
        </Route>
      </Routes>


    </div>
  
    </appContext.Provider>
  );

}

export default App;
