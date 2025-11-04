'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Navbar, NavbarCollapse, NavbarCollapseBtn, NavbarContainer, NavbarItem, NavbarList } from '../aspect-ui'
import DarkMode from './DarkMode'
import Logo from './Logo'
import portfolioData from "@/data/portfolio-data.json"

const Nav = () => {
  const menuItem = [
    { href: '/#home', text: 'Home' },
    { href: '/#about', text: 'About' },
    { href: '/#skills', text: 'Skills' },
    { href: '/#projects', text: 'Projects' },
    { href: '/#experience', text: 'Experience' },
  ]

  const [active, setActive] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateHash = () => setActive(window.location.hash)
      updateHash()
      window.addEventListener('hashchange', updateHash)

      return () => {
        window.removeEventListener('hashchange', updateHash)
      }
    }
  }, [])

  return (
    <Navbar collapseBreakpoint='lg' className="mx-auto w-[90%] items-center gap-6 rounded-lg border border-normalText/25 dark:border-normalDarkText/25 backdrop-blur-md bg-transparent">
      <NavbarContainer className='flex justify-center lg:justify-between'>
        <Logo />

        <NavbarList>
          {menuItem.map((item, index) => {
            const isActive = active === item.href.replace('/', '')
            return (
              <NavbarItem key={index}>
                <motion.li onClick={() => setActive(item.href.replace('/', ''))}
                  className={`${isActive
                    ? 'text-headingText underline underline-offset-4 dark:text-headingDarkText'
                    : 'text-normalText underline-offset-4 hover:text-headingText hover:underline hover:underline-offset-4 dark:text-normalDarkText dark:hover:text-headingDarkText'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    {item.text}
                  </Link>
                </motion.li>
              </NavbarItem>
            )
          })}
        </NavbarList>
        <NavbarList>
          <DarkMode />
          <Link
            href={portfolioData.personal.resume}
            className="rounded-lg bg-primaryColor px-3 py-1 text-headingDarkText inline-flex gap-2 items-center relative"
          >
            Resume
            <span className="inline-flex size-2 animate-ping rounded-full bg-white opacity-75"></span>
            <span className="absolute top-1/2 -translate-y-1/2 right-3 inline-flex size-2 rounded-full bg-white"></span>
          </Link>
        </NavbarList>
        <NavbarCollapseBtn className='absolute left-6 top-1/2 -translate-y-1/2' />
        <NavbarCollapse className='flex items-center gap-3'>
          {menuItem.map((item, index) => {
            const isActive = active === item.href.replace('/', '')
            return (
              <NavbarItem key={index}>
                <Link href={item.href} className="flex items-center gap-2">
                  {item.text}
                </Link>
              </NavbarItem>
            )
          })}
          <div className='flex items-center gap-3'>
            <DarkMode />
            <Link
              href={portfolioData.personal.resume}
              className="rounded-lg bg-primaryColor px-3 py-1 text-headingDarkText inline-flex gap-2 items-center relative"
            >
              Resume
              <span className="inline-flex size-2 animate-ping rounded-full bg-white opacity-75"></span>
              <span className="absolute top-1/2 -translate-y-1/2 right-3 inline-flex size-2 rounded-full bg-white"></span>
            </Link>
          </div>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}

export default Nav
