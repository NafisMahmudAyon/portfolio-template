'use client'
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'
import IconSection from './IconSection'

const Skills = () => {
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
  const childVariants1 = {
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
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={controls}
      id='skills'
      className='grid place-items-center px-4 py-6 md:px-8 md:py-10 lg:px-16 bg-bottom-left lg:py-36'
    >
      <HeadingSection text='Skills' variants={childVariants} />
      <Heading
        text='The skills, tools and technologies'
        className='mb-0 mt-6 text-center'
        variants={childVariants1}
      />
      <Heading
        text='I am really good at'
        className='mb-6 mt-0'
        variants={childVariants1}
      />
      <IconSection />
    </motion.div>
  )
}

export default Skills
