'use client'

import { UseThemeSwitcher } from '../UseThemeSwitcher'
import React from 'react'
import { MoonIcon, SunIcon } from '../Icons'

const DarkMode = () => {
  const [mode, setMode] = UseThemeSwitcher()
  return (
    <button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className={`bg-primaryColors ml-3 flex items-center justify-center rounded-full p-1 ${
        mode === 'light' ? '!text-headingText' : '!text-headingDarkText'
      }`}
    >
      {mode === 'dark' ? (
        <SunIcon className={'fill-primaryColors'} />
      ) : (
        <MoonIcon className={'fill-primaryColors'} />
      )}
    </button>
  )
}

export default DarkMode
