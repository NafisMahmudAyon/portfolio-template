import Hero from './Hero'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    <div
      id='home'
      className='mx-auto mt-4 w-full rounded-t-3xl background bg-[#f1f6fb] pb-16 pt-16 lg:pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] md:min-h-screen lg:max-w-[1440px]'
    >
      {/* <div className='block lg:hidden'>

        <NavBar />
      </div> */}
      <Hero />
    </div>
  )
}

export default HeroSection
