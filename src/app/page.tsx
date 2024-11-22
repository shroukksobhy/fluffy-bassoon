import Image from 'next/image'
// import { useTranslation } from 'react-i18next'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
export default function Home () {
  // const { t } = useTranslation()

  return (
    <div
      className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center
     min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] '
    >
      <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        ابدأ رحلتك التعليمية الآن
      </h1>
      <p className='text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
        اكتشف الدورات التعليمية التي تتناسب مع احتياجاتك
      </p>
      <a
        href='/auth/login'
        className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
      >
        استكشف المزيد
        <ArrowBackIcon />
        {/* {t('learn_more')} */}
        {/* <svg
          className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg> */}
      </a>
    </div>
  )
}
