'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress?: number
  text?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress = 0, text }) => {
  const barAnimation = {
    width: `${progress}%`,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
      duration: 1,
      ease: 'easeInOut'
    }
  }

  return (
    <>
      <p className='text-headingText dark:text-headingDarkText'>{text}</p>
      <div className='relative mt-2 h-3 w-full rounded-full border border-primaryColor'>
        <motion.div
          className='h-full rounded-full bg-primaryColor'
          style={{ width: '0%' }} // Initial state
          animate={barAnimation}
        />
        <motion.div
          className='absolute bottom-4'
          style={{ left: `${progress}%`, translateX: '-50%' }} // Position the label based on progress
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='bg-black text-white relative rounded-lg px-2 py-1 text-xs font-bold shadow-md'>
            {Math.round(progress)}%
            <div className='bg-black absolute bottom-[-3px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform'></div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default ProgressBar
