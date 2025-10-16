'use client'

import { useEffect } from 'react'

export default function ViewportFix() {
  useEffect(() => {
    const setVh = () => {
      // Берём реальную высоту экрана, а не браузера
      let vh;
      if (window.visualViewport) {
        vh = window.visualViewport.height * 0.01
      } else {
        // Fallback for browsers that don't support visualViewport
        vh = window.innerHeight * 0.01
      }
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Первичный вызов после полной загрузки страницы
    const onReady = () => {
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        setTimeout(setVh, 100) // даём Safari время пересчитать
      })
    }

    // Improved event handling
    window.addEventListener('load', onReady)
    window.addEventListener('resize', setVh, { passive: true })
    window.addEventListener('orientationchange', setVh, { passive: true })
    
    // Additional events for better mobile support
    if ('virtualKeyboard' in navigator) {
      // @ts-ignore
      window.visualViewport?.addEventListener('resize', setVh, { passive: true })
    }

    // Вызов сразу при маунте
    setVh()

    return () => {
      window.removeEventListener('load', onReady)
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
      // @ts-ignore
      window.visualViewport?.removeEventListener('resize', setVh)
    }
  }, [])

  return null
}