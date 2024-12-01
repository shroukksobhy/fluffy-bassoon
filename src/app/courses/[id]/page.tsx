'use client'

// import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { useRouter, usePathname } from 'next/navigation'
import { fetchCourseInfo } from '@/utils/api'
import { useTranslation } from 'react-i18next'

export default function CourseDetails () {
  const [course, setCourse] = useState(null)
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  const { t } = useTranslation() // Language

  useEffect(() => {
    const loadCourseData = async () => {
      const response = await fetchCourseInfo(id)
      console.log(response)
      setCourse(response.course)
    }
    // if (id) {
    loadCourseData()
    // }
  }, [])
  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Box pt={5}>
        <Typography variant='h3' gutterBottom>
          {course.title}
        </Typography>
        <p>{course.description}</p>
        <Typography variant='subtitle1' gutterBottom>
          {course.instructor?.name}
        </Typography>
        <Button variant='contained' color='primary' size='large' fullWidth>
          {t('enroll')}
        </Button>
      </Box>
      {/* ...other course details */}
    </Container>
  )
}
