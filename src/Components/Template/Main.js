//Import React 
import React from 'react'
//Import Header
import Header from './Header'

// import css
import './Main.css'


export default props => 
      <React.Fragment>
          <Header  {...props}/>
          <main className="content containet-fluid">
              <div className="p-3 mt-0">
                  {props.children}
              </div>
          </main>
      </React.Fragment>
  