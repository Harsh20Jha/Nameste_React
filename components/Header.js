import React from 'react'
import {LOGO_URL} from '../utils/constants'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'><img src={LOGO_URL}></img></div>
        <div className='navbar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
