'use client'
import { Typography } from '@mui/material'
import PageContainer from '@/components/(DashboardLayout)/components/container/PageContainer'
import DashboardCard from '@/components/(DashboardLayout)/components/shared/DashboardCard'

const ProfilePage = () => {
  return (
    <PageContainer title='Sample Page' description='this is Sample page'>
      <DashboardCard title='Sample Page'>
        <Typography>This is a sample page</Typography>
      </DashboardCard>
    </PageContainer>
  )
}

export default ProfilePage
