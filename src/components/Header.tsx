'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { useUser } from '@/components/context/UserContext'
import { useRouter } from 'next/navigation'

export default function Header () {
  const { user, logout } = useUser()
  const router = useRouter() // Initialize the router

  console.log(user)
  const handleLogout = () => {
    logout()
    router.push('/aulogin')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Coursera
          </Typography>

          {user ? (
            <>
              <span>Welcome, {user.name}</span>{' '}
              <Link href={'/profile'}>
                <Button color='inherit'>Profile</Button>
              </Link>
              {/* <Link href={'/logout'}>Logout</Link> */}
              <Button color='inherit' onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href={'/auth/login'}>
                <Button color='inherit'>Login</Button>
              </Link>
              <Link href={'/auth/register'}>
                <Button color='inherit'>Sign Up</Button>
              </Link>
            </>
          )}

          {/* <Link href='/auth/login' passHref>
            {' '}
            <Button color='inherit'>Login</Button>{' '}
          </Link>
          <Link href='/auth/register' passHref>
            {' '}
            <Button color='inherit'>Register</Button>{' '}
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
