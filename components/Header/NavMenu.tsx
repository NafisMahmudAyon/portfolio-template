'use client'
import React from 'react'
import NavItem from './NavItem'
import DarkMode from './DarkMode'
import Link from 'next/link'
import portfolioData from "@/data/portfolio-data.json"

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
        <Link href={portfolioData.personal.resume} className='rounded-lg bg-primaryColor px-3 py-1 text-headingDarkText inline-flex gap-2 items-center relative'>Resume <span className="inline-flex size-2 animate-ping rounded-full bg-white opacity-75"></span><span className="absolute top-1/2 -translate-y-1/2 right-3 inline-flex size-2 rounded-full bg-white"></span></Link>
        {/* <ContactButton /> */}
      </span>
    </>
  )
}

export default NavMenu
