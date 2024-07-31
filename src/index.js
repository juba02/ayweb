import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
    ici c'est la page principale (au fait c'est la seul page)
    on défini les différentes section de la page sous forme de 'components'
    e.g : 
    <NavBar/>
    il y aura un fichier qui s'appelerai Navbar.js, importé ci-dessus, où on définera le html de ce navbar
    
    */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
