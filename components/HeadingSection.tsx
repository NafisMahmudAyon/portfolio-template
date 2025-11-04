'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'

interface HeadingSectionProps {
  text: string
  variants?: Variants
  className?: string
}

const HeadingSection: React.FC<HeadingSectionProps> = ({
  text,
  variants,
  className = ''
}) => {
  return (
    <motion.h3
      className={`rounded bg-[#e0e6eb] px-4 py-2 text-base leading-none text-headingText drop-shadow-md backdrop-blur-sm backdrop-filter dark:bg-[#2a2a2a] dark:text-headingDarkText ${className}`}
      variants={variants}
    >
      {text}
    </motion.h3>
  )
}

export default HeadingSection
