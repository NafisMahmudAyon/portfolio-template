import {
  Breadcrumb,
  BreadcrumbItem,
  SidebarProvider
} from '@/components/aspect-ui'
import BlogNav from '@/components/BlogNav'
import PageTitle from '@/components/PageTitle'
import data from '@/data/project-data.json'
import Link from 'next/link'
import BlogLayout from './blog-layout'
import Footer from '@/components/Footer/Footer'

export default async function Page({
  params
}: {
    params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const getData = data.filter(item => item.slug === slug)
  return (
    <main className='w-full overflow-hidden'>
      <div
        id='home'
        className='background bg-bg-dark shadow-normalText/25 mx-auto mt-4 w-full rounded-t-3xl pt-6 pb-6 shadow drop-shadow-md backdrop-blur-3xl lg:max-w-[1440px]'
      >
        {/* <NavBar /> */}
        <PageTitle
          title={getData[0].title}
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
            <BreadcrumbItem className=''>{getData[0].title}</BreadcrumbItem>
          </Breadcrumb>
          <BlogNav id={getData[0].id} />
        </div>
      </div>
      <SidebarProvider>
        <div className='bg-bg-dark shadow-normalText/25 border-border mx-auto mb-4 overflow-hidden rounded-b-3xl border-x shadow drop-shadow-md backdrop-blur-3xl lg:max-w-[1440px]'>
          <BlogLayout data={getData[0]} />
          <Footer />
        </div>
      </SidebarProvider>
    </main>
  )
}
