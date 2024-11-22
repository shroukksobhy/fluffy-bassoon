import { useRouter } from 'next/router'

function CoursePage () {
  const router = useRouter()
  const { id } = router.query

  // Fetch data for the specific course based on the ID
  // ...

  return (
    <div>
      <h1>Course ID: {id}</h1>
      {/* Render course details here */}
    </div>
  )
}

export default CoursePage
