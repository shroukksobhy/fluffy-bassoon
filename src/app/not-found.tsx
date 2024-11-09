'use client'

import React from 'react'
import Link from 'next/link'

const NotFoundPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <p className='text-2xl mb-8'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href='/' className='px-4 py-2 bg-blue-600 text-white rounded-md'>
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundPage
