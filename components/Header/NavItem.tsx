'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface NavItemProps {
  text: string
  className?: string
  href?: string
  target?: string
  active?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  active,
  className = '',
  href,
  target
}) => {
  // const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
  //   event.preventDefault()

  //   if (href) {
  //     if (target === '_blank') {
  //       window.open(href, '_blank')
  //     } else {
  //       window.location.href = href
  //     }
  //   }
  // }

  return (
    <motion.li
      className={`${className} ${active ? 'text-headingText underline underline-offset-4 dark:text-headingDarkText' : 'text-normalText underline-offset-4 hover:text-headingText hover:underline hover:underline-offset-4 dark:text-normalDarkText dark:hover:text-headingDarkText'}`}
      // onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href??"/"} target={target}>
        {text}
      </Link>
    </motion.li>
  )
}

export default NavItem
