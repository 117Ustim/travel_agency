'use client'

import { useEffect } from 'react'

export default function ViewportFix() {
  useEffect(() => {
    const setVh = () => {
      // Берём реальную высоту экрана, а не браузера
      const vh = window.visualViewport
        ? window.visualViewport.height * 0.01
        : window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Первичный вызов после полной загрузки страницы
    const onReady = () => {
      setTimeout(setVh, 100) // даём Safari время пересчитать
    }

    window.addEventListener('load', onReady)
    window.addEventListener('resize', setVh)
    window.addEventListener('orientationchange', setVh)

    // Вызов сразу при маунте
    setVh()

    return () => {
      window.removeEventListener('load', onReady)
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
    }
  }, [])

  return null
}