import React from 'react'
import Logo from '../Logo/Logo'
import "./footer.scss"

const Footer : React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <Logo />
      </div>
      <div className='footer-right'>
        <p>Coded by <a href="https://github.com/MhmtMutlu">Mehmet Mutlu</a></p>
      </div>
    </div>
  )
}

export default Footer
