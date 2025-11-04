'use client'
import React from 'react'
import NavItem from './Header/NavItem'
import DarkMode from './Header/DarkMode'
import ContactButton from './Header/ContactButton'

const NavMenu = () => {
  return (
    <>
      <nav className='flex-1'>
        <ul className='flex flex-col items-center justify-center gap-3 pb-6 text-lg text-normalText dark:text-normalDarkText lg:flex-row lg:pb-0 lg:text-base'>
          <NavItem text='Home' href='/#home' active={true} />
          <NavItem text='About' href='/#about' />
          <NavItem text='Skills' href='/#skills' />
          <NavItem text='Projects' href='/#projects' />
          <NavItem text='Experience' href='/#experience' />
        </ul>
      </nav>
      <span className='flex items-center gap-3'>
        <DarkMode />
        <ContactButton link="/#contact" />
      </span>
    </>
  )
}

export default NavMenu
