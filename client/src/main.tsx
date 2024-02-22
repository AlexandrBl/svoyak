import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);
