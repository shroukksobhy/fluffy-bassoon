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
import { useTranslation } from 'react-i18next'
export default function Header () {
  const { user, logout } = useUser()
  const router = useRouter() // Initialize the router
  const { t } = useTranslation()
  // console.log(user)
  const handleLogout = () => {
    logout()
    router.push('/auth/login')
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
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={'/'}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              {t('header.title')}
            </Typography>
          </Link>
          {user ? (
            <>
              {/* <span>Welcome, {user.name}</span>{' '} */}
              <Link href={'/profile'}>
                <Button color='inherit'>{t('header.profile')}</Button>
              </Link>
              <Link href={'/courses'}>
                <Button color='inherit'>{t('header.courses')}</Button>
              </Link>
              <Link href={'/my-courses'}>
                <Button color='inherit'>{t('header.myCourses')}</Button>
              </Link>
              {/* <Link href={'/logout'}>Logout</Link> */}
              <Button color='inherit' onClick={handleLogout}>
                {t('header.logout')}
              </Button>
              <span>{t('header.welcome', { name: user.name })}</span>{' '}
            </>
          ) : (
            <>
              <Link href={'/auth/login'}>
                <Button color='inherit'>{t('header.login')}</Button>
              </Link>
              <Link href={'/auth/register'}>
                <Button color='inherit'>{t('header.signup')}</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
