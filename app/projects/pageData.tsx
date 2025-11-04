'use client'
import { Breadcrumb, BreadcrumbItem, Card } from '@/components/aspect-ui'
import Footer from '@/components/Footer/Footer'
import { GithubIcon, LinkIcon } from '@/components/Icons'
import PageTitle from '@/components/PageTitle'
import { ScrollableImage } from '@/components/ScrollableImage'
import data from '@/data/project-data.json'
import { useAnimation, useInView } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { poppins } from '../fonts'

const PageData = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  // useEffect(() => {
  //   fetchProjects()
  // }, [])

  // async function fetchProjects() {
  //   const { data } = await supabase.from('projects').select('*')
  //   if (data) {
  //     setGetData(data as Project[])
  //   }
  // }
  return (
    <main className='w-full overflow-hidden'>
      <div
        id='home'
        className='background shadow-normalText/25 mx-auto mt-4 w-full rounded-t-3xl bg-[#f1f6fb] pt-6 pb-12 shadow drop-shadow-md backdrop-blur-3xl lg:max-w-[1440px] dark:bg-[#262626]'
      >
        {/* <NavBar /> */}
        <PageTitle
          title='Projects'
          className='flex w-full justify-center px-3 pt-10 text-2xl text-wrap'
        />
        <div className='flex items-center justify-between px-3 md:px-4 lg:px-10'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href='/'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href='/projects'>Projects</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className='shadow-normalText/25 mx-auto mb-4 max-w-[1440px] rounded-b-3xl pt-8 shadow drop-shadow-md backdrop-blur-3xl'>
        <div className='px-4 md:px-8 lg:px-16'>
          <div className='mb-4 grid grid-cols-1 grid-rows-[repeat(5_,_auto)] gap-6 sm:grid-cols-2 md:mb-6 lg:mb-10 lg:grid-cols-3'>
            {data.map(project => (
              <Card
                key={project.id}
                className='group relative row-span-5 grid grid-rows-subgrid gap-0 overflow-hidden rounded-lg py-0 drop-shadow-lg'
              >
                {/* <div className='overflow-hidden'>
                  <Image
                    src={
                      project.project_images.length === 0
                        ? project.slug === 'aspect-ui'
                          ? '/aspect-ui.png'
                          : 'https://via.placeholder.com/600x400'
                        : project.project_images[0]
                    }
                    width={600}
                    height={400}
                    alt={project.title}
                    className='aspect-[3/2] w-full grid-rows-subgrid object-contain transition-transform duration-200 ease-in-out group-hover:scale-110'
                  />
                </div> */}
                <ScrollableImage
                  src={
                    project.project_images.length === 0
                      ? "https://via.placeholder.com/600x400"
                      : project.project_images[0]
                  }
                  alt={project.title}
                  containerHeight="200px"
                  isScroll={project.mode === "scroll"}
                />
                <Link
                  href={
                    project.redirect
                      ? project.redirect_url
                      : `/projects/${project.slug}`
                  }
                  target='_blank'
                  className='absolute inset-0'
                ></Link>
                <h4
                  className={`text-headingText dark:text-headingDarkText h-max grid-rows-subgrid px-4 pt-4 text-lg font-bold ${poppins.className}`}
                >
                  {project.title}
                </h4>
                <p
                  className={`text-normalText dark:text-normalDarkText px-4 py-4 text-sm font-light ${poppins.className}`}
                >
                  <span className='line-clamp-3'>
                    {project.short_description}
                  </span>
                </p>
                <div
                  className={`text-normalText dark:text-normalDarkText flex grid-rows-subgrid gap-2 px-4 text-xs font-extralight ${poppins.className}`}
                >
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className='text-normalText dark:text-normalDarkText h-max grid-rows-subgrid rounded-md bg-[#dfe8f1] px-2 py-1 dark:bg-[#353535]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='text-headingText dark:text-headingDarkText flex justify-between px-4 pt-4 pb-4 text-xs font-extralight'>
                  <a
                    href={project.project_url}
                    target='_blank'
                    className='relative z-50 flex items-center gap-1'
                  >
                    <LinkIcon className='h-3' />
                    Live Preview
                  </a>
                  {project.github_repo && (
                    <a
                      href={project.github_repo || '#'}
                      target='_blank'
                      className='relative z-50 flex items-center gap-2'
                    >
                      <GithubIcon className='text-normalText dark:text-normalDarkText w-5' />{' '}
                      View Code
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default PageData
