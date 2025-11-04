import type React from "react"
import Cursor from "@/components/Cursor"
import { ChevronUpIcon } from "lucide-react"
import type { Metadata } from "next"
import { oswald } from "./fonts"
import "./globals.css"
import PageLoader from "@/components/PageLoader"
import { NavbarWrapper } from "@/components/NavbarWrapper"
import { BackToTop } from "@/components/aspect-ui"
import portfolioData from "@/data/portfolio-data.json"

const { personal } = portfolioData
const metadata = portfolioData.metadata

export const siteMetadata: Metadata = {
  title: metadata.title,
  description: metadata.description,
  keywords: metadata.keywords,
  authors: [{ name: personal.fullName, url: personal.socialLinks.portfolio }],
  creator: personal.fullName,
  publisher: personal.fullName,
  metadataBase: new URL(metadata.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: metadata.title,
    description: metadata.description,
    url: metadata.url,
    siteName: metadata.title,
    images: [
      {
        url: `${metadata.url}${personal.profileImage}`,
        width: 1200,
        height: 630,
        alt: personal.fullName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metadata.title,
    description: metadata.description,
    creator: "@nafis_ayon_bd",
    images: [`${metadata.url}${personal.profileImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schema = {
    "@type": "Person",
    name: personal.fullName,
    alternateName: "Nafis Ayon",
    url: metadata.url,
    image: `${metadata.url}${personal.profileImage}`,
    sameAs: [personal.socialLinks.github, personal.socialLinks.linkedin, personal.socialLinks.facebook],
    jobTitle: personal.title,
    worksFor: {
      "@type": "Organization",
      name: "NafisBD",
    },
    alumniOf: {
      "@type": "University",
      name: "National University of Bangladesh",
    },
    description: metadata.description,
    knowsAbout: ["React.js", "Next.js", "JavaScript", "UI Libraries", "Open Source Development"],
    nationality: {
      "@type": "Country",
      name: "Bangladesh",
    },
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className={` ${oswald.className} bg-bg-dark relative max-h-screen overflow-y-scroll`}>
        <PageLoader />
        <Cursor />
        <NavbarWrapper />
        {children}
        <BackToTop className="border-primaryColor bg-primaryColor/10 text-primaryColor border p-2 backdrop-blur-xl">
          <ChevronUpIcon className="w-6" />
        </BackToTop>
      </body>
    </html>
  )
}
