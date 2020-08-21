import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons'

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
          <Button  color='inherit'>
            Reading List
          </Button>
          <Button color='inherit'>
            Interest Me
          </Button>
          <Button  color='inherit'>
            Profile
          </Button>
          <Button  color='inherit'>
            Login
          </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
