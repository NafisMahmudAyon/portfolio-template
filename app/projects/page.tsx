import { Metadata } from 'next'
import PageData from './pageData'
import portfolioData from "@/data/portfolio-data.json"
const metadata = portfolioData.metadata


export const siteMetadata: Metadata = {
  title: `${metadata.title} | Projects`,
  description: 'Check out my projects'
}

const page = () => {
  return <PageData />
}

export default page
