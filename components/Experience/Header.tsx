'use client'
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'

const Header = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1
      }
    }
  }
  const childVariant2 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.2
      }
    }
  }

  return (
    <motion.div
      className='text-center'
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={controls}
    >
      <HeadingSection text='Experience' variants={childVariants} className='inline-block' />
      <Heading
        text='Here is a quick summery of'
        className='mb-0 mt-6'
        variants={childVariant2}
      />
      <Heading
        text='my most recent experiences'
        className='mb-6 mt-0'
        variants={childVariant2}
      />
    </motion.div>
  )
}

export default Header
