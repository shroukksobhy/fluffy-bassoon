import CoursesList from './coursesList'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid
} from '@mui/material'

function MyCoursesPage () {
  return (
    <Container maxWidth='lg'>
      {/* <Box pb={2}> */}
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        pb={2}
        px={5}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 200,
                boxShadow: '4px 4px 6px  6px rgba(0, 0, 0, 0.1)',
                borderRadius: 6,
                height: 75
              }}
            >
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  مصري
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  عربي
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 200,
                boxShadow: '4px 4px 6px  6px rgba(0, 0, 0, 0.1)',
                borderRadius: 6,
                height: 75
              }}
            >
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  مصري
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  عربي
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 200,
                boxShadow: '4px 4px 6px  6px rgba(0, 0, 0, 0.1)',
                borderRadius: 6,
                height: 75
              }}
            >
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  مصري
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  عربي
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant='h4' gutterBottom>
          متابعة المشاهدة
        </Typography>
      </Box>
      <Box className='card'>
        <CoursesList />
      </Box>
    </Container>
  )
}

export default MyCoursesPage
