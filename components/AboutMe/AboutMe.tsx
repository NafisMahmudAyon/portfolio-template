import React from 'react'
import About from './About'
import Profile from './Profile'

const AboutMe = () => {
  return (
    <div
      id='about'
      className='grid grid-cols-1 px-4 pb-4 md:grid-cols-3 md:gap-14 md:px-8 md:pb-6 lg:gap-0 lg:px-16 lg:pb-20 xl:grid-cols-5 bg-right pt-16 md:pt-36'
    >
      <div className='grid place-items-center xl:col-start-1 xl:col-end-3'>
        <Profile />
      </div>
      <div className='md:col-start-2 md:col-end-4 xl:col-start-3 xl:col-end-6'>
        {/* <HeadingSection text="About Me" />
        <Heading text="Who am I?" /> */}
        <About />
      </div>
    </div>
  )
}

export default AboutMe
