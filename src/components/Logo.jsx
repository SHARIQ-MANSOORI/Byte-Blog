import React from 'react'
import LogoImg from '../assets/logo.png'

function Logo({width ='100px'}) {
  return (
    <div>
      <img src={LogoImg} alt="Logo" style={{ width }} />
    </div>
  )
}

export default Logo