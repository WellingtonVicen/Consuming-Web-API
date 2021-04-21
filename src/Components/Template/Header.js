// Import React
import React from 'react';
// Import ReactSuite
 import { Icon } from 'rsuite'
// Import css
import './Header.css'


export default props => 
     <header className="header d-none d-sm-flex flex-column">
          <h1 className="mt-3">
               <Icon icon="home" className={`${props.icon}`}></Icon> {props.title}              
          </h1>
          <p className="lead text-muted">{ props.subtitle}</p>
     </header>





