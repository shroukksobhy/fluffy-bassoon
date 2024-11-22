import React, { useState } from 'react'
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CustomTextField from '@/components/(DashboardLayout)/components/forms/theme-elements/CustomTextField'
import { useUser } from '@/components/context/UserContext'
import { useTranslation } from 'react-i18next'

interface loginType {
  title?: string
  subtitle?: JSX.Element | JSX.Element[]
  subtext?: JSX.Element | JSX.Element[]
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter() // Initialize the router
  const { setUser } = useUser() // Access setUser from context
  const { t } = useTranslation() // Language
  function handleChangeEmail (e: React.ChangeEvent<HTMLInputElement>) {
    setMessage('')
    setEmail(e.target.value)
  }

  function handleChangePassword (e: React.ChangeEvent<HTMLInputElement>) {
    setMessage('')
    setPassword(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      if (response.ok) {
        setLoading(false)
        console.log('Login successful!')
        console.log(data.user)
        setUser(data.user) // Set the user data in context
        localStorage.setItem('user', JSON.stringify(data.user))
        // const storedUser = localStorage.getItem('user')
        // if (storedUser) {
        //   try {
        //     const userObj = JSON.parse(storedUser)
        //     console.log(userObj)
        //   } catch (error) {
        //     console.error('Error parsing JSON:', error)
        //   }
        // }
        router.push('/')
      } else {
        setLoading(false)
        // setMessage(`Login failed: ${data.error}`)
        setMessage('Invalid username or password')

        console.log(message)
      }
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
  return (
    <>
      {title ? (
        <Typography fontWeight='700' variant='h2' mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <form onSubmit={handleSubmit}>
        <Stack>
          <Box>
            <Typography
              variant='subtitle1'
              fontWeight={600}
              component='label'
              htmlFor='username'
              mb='5px'
            >
              {t('form.username')}
            </Typography>
            <CustomTextField
              variant='outlined'
              fullWidth
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </Box>
          <Box mt='25px'>
            <Typography
              variant='subtitle1'
              fontWeight={600}
              component='label'
              htmlFor='password'
              mb='5px'
            >
              {t('form.password')}
            </Typography>
            <CustomTextField
              type='password'
              variant='outlined'
              fullWidth
              value={password}
              onChange={handleChangePassword}
              required
            />{' '}
          </Box>
          {message && (
            <div
              role='alert'
              className='rounded border-s-4 border-red-500 bg-red-50 p-4'
            >
              <p className='mt-2 text-sm text-red-700'>{message}</p>
            </div>
          )}

          <Stack
            justifyContent='space-between'
            direction='row'
            alignItems='center'
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={t('form.remember_device')}
              />
            </FormGroup>
            <Typography
              component={Link}
              href='/'
              fontWeight='500'
              sx={{
                textDecoration: 'none',
                color: 'primary.main'
              }}
            >
              {t('form.forgot_password')}
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button
            color='primary'
            variant='contained'
            size='large'
            fullWidth
            type='submit'
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Box>
      </form>
      {subtitle}
    </>
  )
}

export default AuthLogin
