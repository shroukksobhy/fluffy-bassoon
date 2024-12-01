'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { fetchUserData, updateProfileData } from '@/utils/api'
import { Typography } from '@mui/material'
import { useUser } from '@/components/context/UserContext'
import { useTranslation } from 'react-i18next'

import PageContainer from '@/components/(DashboardLayout)/components/container/PageContainer'
import DashboardCard from '@/components/(DashboardLayout)/components/shared/DashboardCard'
interface UserData {
  name: string
  email: string
  [key: string]: any
}
const ProfilePage = () => {
  const { user, logout } = useUser()
  const { t } = useTranslation()

  let userId = user ? user.id : ''
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData(userId)
        console.log(data.user)
        setUserData(data.user)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    loadUserData()
  }, [])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData(prevData => ({ ...prevData, [name]: value }))
  }
  return (
    <PageContainer title='Profile Page' description='this is Sample page'>
      <DashboardCard title='الحساب'>
        {/* <Typography>{userData.name}</Typography> */}
        {/* <Typography>{userData.email}</Typography> */}
        <form className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t('full_name')}
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t('email')}
            </label>
            <input
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              {t('language')}
            </label>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option>{t('lan.ar')}</option>
              <option>{t('lan.en')}</option>
            </select>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            {t('submit')}
          </button>
        </form>
      </DashboardCard>
    </PageContainer>
  )
}

export default ProfilePage
