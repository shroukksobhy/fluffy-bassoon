import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/components/(DashboardLayout)/components/forms/theme-elements/CustomTextField'
import { Stack } from '@mui/system'
import { TextField } from '@mui/material'
import { useUser } from '@/components/context/UserContext'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

interface registerType {
  title?: string
  subtitle?: JSX.Element | JSX.Element[]
  subtext?: JSX.Element | JSX.Element[]
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { setUser } = useUser() // Access setUser from context
  const router = useRouter() // Initialize the router
  const { t } = useTranslation() // Language

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage('')
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (response.ok) {
        setLoading(false)
        console.log('Registration successful!')
        console.log(data.user)
        setUser(data.user) // Set the user data in context
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/')
      } else {
        setMessage(`Registration failed: ${data}`)
      }
    } catch (error) {
      setLoading(false)
      setMessage(`Error: ${error.message}`)
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

      <Box>
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
                name='name'
                onChange={handleChange}
                required
              />
            </Box>
            <Box mt='25px'>
              <Typography
                variant='subtitle1'
                fontWeight={600}
                component='label'
                htmlFor='email'
                mb='5px'
              >
                {t('form.email')}
              </Typography>
              <CustomTextField
                variant='outlined'
                fullWidth
                name='email'
                type='email'
                onChange={handleChange}
                required
              />
            </Box>{' '}
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
                onChange={handleChange}
                name='password'
                required
                inputProps={{ minLength: 8 }}
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
            ></Stack>
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

        {/* <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <Stack mb={3}>
            <Typography
              variant='subtitle1'
              fontWeight={600}
              component='label'
              htmlFor='name'
              name='name'
              mb='5px'
            >
              Name
            </Typography>
            <TextField
              variant='outlined'
              fullWidth
              onChange={handleChange}
              required
            />

            <Typography
              variant='subtitle1'
              fontWeight={600}
              component='label'
              type='email'
              name='email'
              mb='5px'
              mt='25px'
            >
              Email Address
            </Typography>
            <TextField
              variant='outlined'
              fullWidth
              onChange={handleChange}
              required
            />
            <Typography
              variant='subtitle1'
              fontWeight={600}
              component='label'
              htmlFor='password'
              name='password'
              mb='5px'
              mt='25px'
            >
              Password
            </Typography>
            <TextField
              variant='outlined'
              fullWidth
              type='password'
              onChange={handleChange}
              required
            />
          </Stack>
          <Button
            color='primary'
            variant='contained'
            size='large'
            disabled={loading}
            type='submit'
            fullWidth
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </form> */}
      </Box>
      {subtitle}
    </>
  )
}
export default AuthRegister
