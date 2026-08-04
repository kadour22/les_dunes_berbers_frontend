import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has been scrolled past a given threshold.
 * Used to toggle the navbar's glassmorphism background on scroll.
 */
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
