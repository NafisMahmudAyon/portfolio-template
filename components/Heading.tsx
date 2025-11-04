'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { poppins } from '@/app/fonts'

interface HeadingProps {
  text: string
  className?: string
  variants?: Variants
}

const Heading: React.FC<HeadingProps> = ({
  text,
  className = '',
  variants
}) => {
  return (
    <motion.h2
      className={`${className} ${poppins.className} my-6 text-xl font-medium text-primaryColor md:text-2xl`}
      variants={variants}
    >
      {text}
    </motion.h2>
  )
}

export default Heading
