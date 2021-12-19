import React from 'react'
import "./navbarButton.scss"

const NavbarButton : React.FC = ({ children }) => {
  return (
    <button className='navbar-button'>
      {children}
    </button>
  )
}

export default NavbarButton
