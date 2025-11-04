'use client'

import { useEffect, useState } from 'react'

export const UseThemeSwitcher = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [mode, setMode] = useState<string>(() => {
    return 'light' // Provide a safe default during SSR
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const savedTheme = window.localStorage.getItem('theme')
    const systemTheme = window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'
    setMode(savedTheme || systemTheme)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    window.localStorage.setItem('theme', mode)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(mode)
  }, [mode, isMounted])

  return [mode, setMode]
}
