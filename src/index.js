import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'aos/dist/aos.css'; // Importation du CSS d'AOS
import AOS from 'aos';
import NavBar from "./NavBar/NavBar"
import AboutUs from './AboutUs/AboutUs';

AOS.init({
  duration: 1000, // Durée de l'animation
});

// AOS.init(); //init animation-on-scroll module

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      <main className='overflow-x-hidden font-Poppins bg-lightColor dark:bg-darkColor' id="main"> 
        <NavBar/>
        <AboutUs/>
      </main>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
