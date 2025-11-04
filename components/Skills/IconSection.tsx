'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import {
  CSSIcon,
  ExpressIcon,
  FigmaIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JSIcon,
  MongoDBIcon,
  MySQLIcon,
  NetlifyIcon,
  NextJSIcon,
  NodeIcon,
  PHPIcon,
  PostgreSQLIcon,
  ReactIcon,
  TailwindIcon,
  TSIcon,
  VercelIcon,
  VSCodeIcon
} from '../Icons'
import Icon from './Icon'

import { oswald } from '@/app/fonts'

const IconSection = () => {
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
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        staggerChildren: 0.1
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',

        staggerChildren: 0.1
      }
    }
  }
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={controls}
      className={`w-full pt-8 ${oswald.className}`}
    >
      <div className='flex flex-col items-center justify-around gap-6 pb-10 md:gap-8 lg:flex-row lg:gap-0'>
        <div className='flex flex-col items-center justify-center'>
          <span className='pb-5 text-primaryColor'>Front End</span>
          <div className='grid grid-cols-5 gap-5 md:grid-cols-8 lg:flex lg:flex-wrap'>
            {[
              {
                icon: <HTMLIcon className='aspect-square w-10' />,
                text: 'HTML',
                progress: 100,
                initialAnimation: 'bottom',
                progressStyle: ''
              },
              {
                icon: <CSSIcon className='aspect-square w-10' />,
                text: 'CSS',
                progress: 100,
                initialAnimation: 'bottom',
                progressStyle: ''
              },
              {
                icon: <JSIcon className='aspect-square w-10' />,
                text: 'JS',
                progress: 90,
                initialAnimation: 'bottom',
                progressStyle: ''
              },
              {
                icon: <TSIcon className='aspect-square w-10' />,
                text: 'TS',
                progress: 90,
                initialAnimation: 'bottom',
                progressStyle: ''
              },
              {
                icon: <PHPIcon className='aspect-square w-10' />,
                text: 'PHP',
                progress: 80,
                initialAnimation: 'bottom',
                progressStyle: ''
              },
              {
                icon: <TailwindIcon className='aspect-square w-10' />,
                text: 'Tailwind',
                progress: 100,
                initialAnimation: 'bottom',
                progressStyle: ''
              },
              {
                icon: <ReactIcon className='aspect-square w-10' />,
                text: 'React',
                progress: 90,
                initialAnimation: 'bottom',
                progressStyle: ''
              },
              {
                icon: <NextJSIcon className='aspect-square w-10' />,
                text: 'Next.js',
                progress: 90,
                initialAnimation: 'top',
                progressStyle: ''
              }
            ].map((icon, i) => {
              return (
                <Icon
                  key={i}
                  initialAnimation={icon.initialAnimation}
                  icon={icon.icon}
                  className={`${i === 5 ? 'col-start-2 md:col-start-6' : ''}`}
                  progress={icon.progress}
                  text={icon.text}
                  progressStyle={`${i === 0 ? '!left-0 !translate-x-0' : ''} ${i === 4 ? '!left-full !right-0 !-translate-x-full' : ''}`}
                  variants={iconVariants}
                />
              )
            })}
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='pb-5 text-primaryColor'>Back End</span>
          <div className='grid grid-cols-5 gap-5 lg:flex lg:flex-wrap'>
            {[
              {
                icon: <NodeIcon className='aspect-square w-10' />,
                text: 'Node',
                progress: 80
              },
              {
                icon: <ExpressIcon className='aspect-square w-10' />,
                text: 'Express',
                progress: 80
              },
              {
                icon: <MySQLIcon className='aspect-square w-10' />,
                text: 'MySQL',
                progress: 70
              },
              {
                icon: <PostgreSQLIcon className='aspect-square w-10' />,
                text: 'PostgreSQL',
                progress: 80
              },
              {
                icon: <MongoDBIcon className='aspect-square w-10' />,
                text: 'MongoDB',
                progress: 80
              }
            ].map((icon, i) => {
              return (
                <Icon
                  key={i}
                  initialAnimation='bottom'
                  icon={icon.icon}
                  className={`${i === 5 ? 'col-start-2' : ''}`}
                  progress={icon.progress}
                  text={icon.text}
                  progressStyle={`${i === 0 ? '!left-0 !translate-x-0' : ''} ${i === 4 ? '!left-full !right-0 !-translate-x-full' : ''}`}
                  variants={iconVariants}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <span className='pb-5 text-primaryColor'>Others</span>
        <div className='grid grid-cols-4 gap-6 md:grid-cols-6 lg:flex lg:flex-wrap lg:gap-5'>
          {[
            {
              icon: <GitIcon className='aspect-square w-10' />,
              text: 'Git',
              progress: 90
            },
            {
              icon: <GitHubIcon className='aspect-square w-10' />,
              text: 'GitHub',
              progress: 90
            },
            {
              icon: <NetlifyIcon className='aspect-square w-10' />,
              text: 'Netlify',
              progress: 90
            },
            {
              icon: <VercelIcon className='aspect-square w-10' />,
              text: 'Vercel',
              progress: 90
            },
            {
              icon: <VSCodeIcon className='aspect-square w-10' />,
              text: 'VS Code',
              progress: 90
            },
            {
              icon: <FigmaIcon className='aspect-square w-10' />,
              text: 'Figma',
              progress: 90
            }
          ].map((icon, i) => {
            return (
              <Icon
                key={i}
                initialAnimation='bottom'
                icon={icon.icon}
                className={`${i === 4 ? 'col-start-2 md:col-start-5' : ''}`}
                progress={icon.progress}
                text={icon.text}
                progressStyle={`${i === 0 ? '!left-0 !translate-x-0' : ''} ${i === 3 ? '!left-full !right-0 !-translate-x-full' : ''}`}
                variants={iconVariants}
              />
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default IconSection
