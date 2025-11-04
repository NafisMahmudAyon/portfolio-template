import { poppins } from '@/app/fonts'
import portfolioData from "@/data/portfolio-data.json"
import Link from 'next/link'
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Icons'

const FooterMenu = () => {
  return (
    <div
      className={`flex flex-col items-center gap-4 font-light lg:flex-row lg:gap-8 ${poppins.className}`}
    >
      <div className='flex flex-col items-center lg:flex-row lg:gap-3'>
        <a href={`tel:${portfolioData.personal.phone}`}>+880 173 323 5762</a>
        <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
      </div>
      <ul className='flex items-center gap-2'>
        <li>
          <Link href={portfolioData.personal.socialLinks.facebook}>
            <FacebookIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href={portfolioData.personal.socialLinks.twitter}>
            <TwitterIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href={portfolioData.personal.socialLinks.linkedin}>
            <LinkedInIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href={portfolioData.personal.socialLinks.github}>
            <GithubIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu
