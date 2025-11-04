import AboutMe from '@/components/AboutMe/AboutMe'
import CallToAction from '@/components/CallToAction/CallToAction'
import Experience from '@/components/Experience/Experience'
import Footer from '@/components/Footer/Footer'
import HeroSection from '@/components/Header/HeroSection'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'

export default function Home() {
  return (
    <main className='w-full overflow-hidden'>
      <HeroSection />
      <div className='shadow-normalText/25 mx-auto mb-4 max-w-[1440px] rounded-b-3xl shadow drop-shadow-md backdrop-blur-3xl'>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <CallToAction />
        <Footer />
      </div>
    </main>
  )
}
