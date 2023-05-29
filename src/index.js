import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from './styledGlobal'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlobalStyled/>
  </>
);

