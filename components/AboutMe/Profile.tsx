'use client'
import portfolioData from "@/data/portfolio-data.json"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import HeadingSection from '../HeadingSection'
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon
} from '../Icons'

const Profile = () => {
  return (
    <div className='relative mb-16 flex flex-col items-center lg:mb-0'>
      <HeadingSection text='About Me' className='mx-auto mb-8 md:hidden' />
      <motion.div
        className='mx-auto aspect-square w-[260px] overflow-hidden rounded-full border border-primaryColor drop-shadow-lg'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 100,
          ease: 'easeInOut',
          delay: 0.2
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={portfolioData.personal.profileImage}
          alt='portfolioData.personal.fullName'
          // layout='responsive'
          width={400}
          height={400}
          className='rounded-2xl'
          priority
        />
      </motion.div>
      <motion.div
        className='absolute -bottom-10 left-1/2 flex w-[260px] flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor/90 px-4 py-2 text-center backdrop-blur-md'
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: '-50%', opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 100,
          ease: 'easeInOut',
          delay: 0.2
        }}
        whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      >
        <span className='pb-1 text-headingText dark:text-headingDarkText'>
          {portfolioData.personal.fullName}
        </span>
        <ul className='flex items-center gap-2'>
          <li>
            <Link href={portfolioData.personal.socialLinks.facebook}>
              <FacebookIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
            </Link>
          </li>
          <li>
            <Link href={portfolioData.personal.socialLinks.twitter}>
              <TwitterIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
            </Link>
          </li>
          <li>
            <Link href={portfolioData.personal.socialLinks.linkedin}>
              <LinkedInIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
            </Link>
          </li>
          <li>
            <Link href={portfolioData.personal.socialLinks.github}>
              <GithubIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Profile
