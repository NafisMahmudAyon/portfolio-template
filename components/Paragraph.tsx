'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { poppins } from '@/app/fonts'

interface ParagraphProps {
  text: string
  className?: string
  variants?: Variants
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  className = '',
  variants
}) => {
  return (
    <motion.p
      className={`${className} ${poppins.className} text-ba my-3 text-base font-normal text-normalText dark:text-normalDarkText md:font-medium`}
      variants={variants}
    >
      {text}
    </motion.p>
  )
}

export default Paragraph
