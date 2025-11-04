'use client'
import React, { useState } from 'react'
import Logo from './Header/Logo'
import { BarIcon, XMarkIcon } from './Icons'
import NavMenu from './NavMenu'

const NavBar = () => {
  const [openMenu, setopenMenu] = useState(false)
  return (
    <>
      <div className='mx-auto hidden w-[90%] items-center gap-6 rounded-lg border border-normalText/25 px-4 py-3 dark:border-normalDarkText/25 lg:flex backdrop-blur-md'>
        <Logo />
        <NavMenu />
      </div>
      <div className='relative z-50 flex w-full items-center justify-center lg:!hidden'>
        <span
          className='absolute left-6 top-1/2 -translate-y-1/2'
          onClick={() => {
            setopenMenu(!openMenu)
          }}
        >
          {openMenu && (
            <XMarkIcon className='text-headingText dark:text-headingDarkText' />
          )}
          {!openMenu && (
            <BarIcon className='text-headingText dark:text-headingDarkText' />
          )}
        </span>
        <Logo />
        <div
          className={`absolute top-[150%] ${openMenu ? 'z-50 flex w-[90%] flex-col items-center rounded-md bg-primaryColor/30 py-12 drop-shadow-md backdrop-blur-3xl' : 'right-full hidden'} `}
        >
          <NavMenu />
        </div>
      </div>
    </>
  )
}

export default NavBar
