import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import { ContextProvider } from './context/ContextProvider';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);