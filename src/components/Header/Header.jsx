import React from 'react'
import './Header.css'
import logo from '../../assets/img/shiba.png'

const Header = () => {
  return (
    <div className='header_container'>
        <div className='left_header'>
          <img src={logo} alt=''/>
          <p>MemeGenerator</p>
        </div>
        <div className='right_header'>
          <p>React Course - Project 3</p>
        </div>
    </div>
  )
}

export default Header