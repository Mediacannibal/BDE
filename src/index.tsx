import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom'

 
ReactDOM.render(
  <BrowserRouter forceRefresh={true} >
       <Normalize />
      <App />
   </BrowserRouter>,
  document.getElementById('root')
)
