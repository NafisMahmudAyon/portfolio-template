import BlogNav from '@/components/BlogNav'
import Footer from '@/components/Footer/Footer'
import MarkdownContent from '@/components/MarkdownContent'
import PageTitle from '@/components/PageTitle'
import data from '@/public/project-data.json'
import { Breadcrumb, BreadcrumbItem } from '@/components/aspect-ui'
import Link from 'next/link'

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const getData = data.filter(item => item.slug === slug)

  return (
    <main className='w-full cursor-none overflow-hidden'>
      <div
        id='home'
        className='background shadow-normalText/25 mx-auto mt-4 w-full rounded-t-3xl bg-[#f1f6fb] pt-6 pb-12 shadow drop-shadow-md backdrop-blur-3xl lg:max-w-[1440px] dark:bg-[#262626]'
      >
        {/* <NavBar /> */}
        <PageTitle
          title={getData[0].title}
          className='flex w-full justify-center px-3 pt-10 text-2xl text-wrap'
        />
      </div>
      <div className='shadow-normalText/25 mx-auto mb-4 max-w-[1440px] rounded-b-3xl bg-[#f1f6fa] px-3 shadow drop-shadow-md backdrop-blur-3xl md:px-4 lg:px-10 dark:bg-[#272727]'>
        <Breadcrumb
          className='flex-wrap gap-2 px-0 py-10 md:gap-3'
          separatorClassName=''
        >
          <BreadcrumbItem>
            <Link href='/'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href='/projects'>Projects</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className=''>{getData[0].title}</BreadcrumbItem>
        </Breadcrumb>

        <MarkdownContent
          content={getData[0].blog}
          className='mb-4 md:mb-6 lg:mb-10'
        />
        <BlogNav id={getData[0].id} />
        <Footer />
      </div>
    </main>
  )
}
