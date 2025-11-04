'use client'
import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import ProgressBar from './Progress'
import { oswald } from '@/app/fonts'

interface iconProps {
  className?: string
  icon?: React.ReactNode
  progress?: number
  initialAnimation?: 'top' | 'bottom' | string
  text?: string
  variants?: Variants
  progressStyle?: string
}

const Icon: React.FC<iconProps> = ({
  className = '',
  icon,
  progress,
  text,
  variants,
  progressStyle = ''
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`${className} ${oswald.className} relative flex flex-col items-center`}
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <span className='font-extralight text-headingText dark:text-headingDarkText'>
        {text}
      </span>
      {isHovered && (
        <motion.div
          className={`absolute -top-2/3 flex w-48 -translate-y-1/2 flex-col items-start justify-center rounded-lg border border-primaryColor bg-primaryColor/30 px-4 py-2 backdrop-blur-sm lg:!left-1/2 lg:right-auto lg:!-translate-x-1/2 ${progressStyle}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ProgressBar progress={progress} text={text} />
        </motion.div>
      )}
    </motion.div>
  )
}

export default Icon
