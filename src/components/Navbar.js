import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <AppBar position = 'sticky'>
        <Toolbar>
          <IconButton color='inherit' edge='start' aria-label='menu'>
          <Button color='inherit' >
            Home
          </Button>
          </IconButton>
          <div className='navButton'>
            <Link to={'/readinglist'} style={{textDecoration: 'none', color: '#FFF'}}>
          <Button  color='inherit'>
            Reading List
          </Button>
          </Link>
          <Link to={'/interestMe'} style={{textDecoration: 'none', color: '#FFF'}}>
          <Button color='inherit'>
            Interest Me
          </Button>
          </Link>
          <Link to={'/profile'} style={{textDecoration: 'none', color: '#FFF'}}>
          <Button  color='inherit'>
            Profile
          </Button>
          </Link>
          <Link to={'/login'} style={{textDecoration: 'none', color: '#FFF'}}>
          <Button  color='inherit'>
            Login
          </Button>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
