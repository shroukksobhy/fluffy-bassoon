'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Grid,
  Typography
} from '@mui/material'
function coursesList () {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/courses') // Replace with your API endpoint
      const data = await response.json()
      console.log(data.data)

      setCourses(data.data)
    }

    fetchCourses()
  }, [])
  return (
    <Box>
      <Grid container spacing={2}>
        {courses.map(course => (
          <Grid item xs={12} md={4} lg={3} key={course.id}>
            <Box pb={2} mb={3}>
              <Card
                key={course.id}
                sx={{
                  maxWidth: 345,
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <CardActionArea href={`/courses/${course.id}`}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image='/courseimg.jpeg'
                    title={course.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {course.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>{' '}
       
    </Box>
  )
}

export default coursesList
