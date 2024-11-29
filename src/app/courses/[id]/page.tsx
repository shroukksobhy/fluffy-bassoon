// 'use client'

// import { useRouter, usePathname } from 'next/navigation'
// import { Container } from '@mui/material'

// const CourseDetail = () => {
//   const pathname = usePathname()
//   const id = pathname.split('/').pop()

//   return (
//     <Container>
//       <h1> {id} تدريب </h1>
//       <p> {id}شرح محتوي كورس.</p>
//     </Container>
//   )
// }

// export default CourseDetail

import { useRouter } from 'next/router';

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://api.example.com/courses/${id}`);
  const courseData = await res.json();

  return {
    props: {
      courseData,
    },
  };
}

const CourseDetail = ({ courseData }) => {
  return (
    <Container>
      <h1>{courseData.title}</h1>
      <p>{courseData.description}</p>
      {/* ... other course details ... */}
    </Container>
  );
};

export default CourseDetail;
