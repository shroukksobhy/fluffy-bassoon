import { Container } from '@mui/material'
import Pagination from '@mui/material/Pagination'

import CoursesList from './coursesList'
function CoursesPage () {
  return (
    <Container maxWidth='lg'>
      <CoursesList />
      <Pagination count={10} />
    </Container>
  )
}

export default CoursesPage
