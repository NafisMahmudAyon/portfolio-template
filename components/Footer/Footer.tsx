import React from 'react'
import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <div
      id='footer'
      className='mx-auto flex w-[90%] max-w-[1440px] flex-col items-center justify-between gap-4 border-t border-normalText/30  py-6 text-headingText dark:border-normalDarkText/30  dark:text-headingDarkText lg:flex-row'
    >
      <FooterLogo />
      <FooterMenu />
    </div>
  )
}

export default Footer
