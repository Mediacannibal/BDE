import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom'

import ReactGA from 'react-ga';
ReactGA.initialize('<G-R7GER30TG2>');

ReactDOM.render(
  <BrowserRouter forceRefresh={true} >
    <Normalize />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
