import React from 'react';
import { Container } from 'rsuite'
import {  BrowserRouter } from 'react-router-dom'
import './App.css';

/** import default css */
  import 'rsuite/dist/styles/rsuite-default.css';    

/** import dark css */
/*  import 'rsuite/dist/styles/rsuite-dark.css';  */
 import 'rsuite/lib/styles/themes/default/index.less';   
 import 'bootstrap/dist/css/bootstrap.min.css'


import Routes from './Routes.js'
import NavBar from '../Components/Template/NavBar.js'


function App() {
  return (
  <BrowserRouter>
    <div className="App">
       <Container>
          <NavBar />  
          <Routes /> 
         </Container>
         
    </div>
  </BrowserRouter>
    
  );
}

export default App;