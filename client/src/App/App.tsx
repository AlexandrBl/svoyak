import React  from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import QustionsList from '../Features/Questions/components/QustionsList';

function App(): JSX.Element {
  
  


  return (
    
    
    <div className="App">

      

      <Routes>
        {/* <Route path='/' element={<Main/>} > */}
          <Route path='/' element={<QustionsList/>} />
          {/* <Route path='restaurant/:name' element={<RestarauntPage />} /> */}
        {/* </Route> */}
      </Routes>
    </div>
  
  );

}

export default App;
