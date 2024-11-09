import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
    document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lng)
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>العربية</button>
    </div>
  )
}

export default LanguageSwitcher
