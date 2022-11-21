import React from 'react'
import {AppBar, Toolbar} from '@mui/material'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <AppBar className='container'>
        <Toolbar>
            <div className='container_items'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/login '>Logout</Link>
              </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header
