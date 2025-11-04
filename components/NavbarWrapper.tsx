'use client'

import { useEffect, useRef, useState } from 'react'
import Nav from './Header/Nav'

export const NavbarWrapper = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Helper to clear hide timer
  const clearHideTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  // Hide navbar after a delay
  const startHideTimer = () => {
    clearHideTimer()
    timerRef.current = setTimeout(() => {
      if (!isHovering && window.scrollY > 10) {
        setVisible(false)
      }
    }, 3000)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)

      if (!isHovering) {
        startHideTimer()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearHideTimer()
    }
  }, [prevScrollPos, isHovering])

  const handleMouseEnter = () => {
    setIsHovering(true)
    setVisible(true)
    clearHideTimer()
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    startHideTimer()
  }

  return (
    <div
      className={` max-w-[calc(1440px_-_10%)] w-full fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${visible ? 'top-0 mt-10 opacity-100' : '-top-24 opacity-0'
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Nav />
      {/* <NavBar /> */}
    </div>
  )
}
