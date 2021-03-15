import React from 'react'
import './style.css'

import * as logo from '../../../assets/images/logo.svg'

const Spinner = () => {
  return (

    <div className='loader_logoicon_containers'>
      <img className='loader_logoicon' src={logo} />
      <div className="loader">
      </div>
    </div>

  )
}

export default Spinner


