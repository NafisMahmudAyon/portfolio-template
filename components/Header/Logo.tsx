import { poppins } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileData from '@/data/portfolio-data.json'

const Logo = () => {
  return (
    <h1
      className={`text-xl font-semibold tracking-wide text-headingText dark:text-headingDarkText ${poppins.className}`}
    >
      <Link href='/#home'>
        <Image src={profileData.logo.img} alt='logo' width={100} height={100} />
      </Link>
    </h1>
  )
}

export default Logo
