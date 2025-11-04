"use client"
import { poppins } from "@/app/fonts"
import portfolioData from "@/data/portfolio-data.json"
import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import type React from "react"
import { useEffect, useRef } from "react"
import { GithubIcon, LinkIcon } from "../Icons"
import { ScrollableImage } from "../ScrollableImage"
import { Badge, Card } from "../aspect-ui"
import projectData from "@/data/project-data.json"

export interface Project {
  id: number
  created_at?: string
  title: string
  slug: string
  short_description: string
  project_type: string[]
  project_status: string
  date_started: string
  date_complete: string
  tech_use: string[]
  project_url: string
  role: string
  client_name?: string | null
  client_feedback?: string | null
  key_features: {
    desc: string
    title: string
  }[]
  challenges_faced?: string | null
  lessons_learned?: string | null
  team_size: number
  collaborators?: string[] | null
  project_images: string[]
  project_videos?: string[] | null
  documentation_links?: string | null
  github_repo?: string | null
  downable_resources?: string | null
  updated_at?: string
  tags: string[]
  views_count: number
  likes: number
  comments?: string | null
  description: string[]
  mode?: "normal" | "scroll"
  redirect?: boolean
  redirect_url?: string
}

const ProjectsGrid: React.FC = () => {
  const projects = projectData
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`px-4 pb-20 md:px-8 lg:px-16 ${poppins.className}`}
    >
      <div className="grid grid-cols-1 grid-rows-[repeat(5_,_auto)] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          (project, index) =>
            (
              <Card
                key={project.id}
                className="relative row-span-5 grid grid-rows-subgrid gap-0 overflow-hidden rounded-lg py-0 group"
              >
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
                  href={project.redirect ? project.redirect_url || "#" : `/projects/${project.slug}`}
                  className="absolute inset-0"
                ></Link>

                <h4
                  className={`px-4 pt-4 text-lg grid-rows-subgrid font-bold text-headingText dark:text-headingDarkText h-max ${poppins.className}`}
                >
                  {project.title}
                </h4>
                <p
                  className={`px-4 py-4 text-sm font-light text-normalText dark:text-normalDarkText ${poppins.className}`}
                >
                  <span className="line-clamp-3">{project.short_description}</span>
                </p>
                <div
                  className={`flex flex-wrap gap-2 px-4 text-xs font-extralight grid-rows-subgrid text-normalText dark:text-normalDarkText ${poppins.className}`}
                >
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge variant="outline" key={i} className="rounded-md grid-rows-subgrid h-max px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between px-4 pb-4 pt-4 text-xs font-extralight text-headingText dark:text-headingDarkText">
                  <a
                    href={project.project_url}
                    target="_blank"
                    className="flex relative z-50 items-center gap-1"
                    rel="noreferrer"
                  >
                    <LinkIcon className="h-3" />
                    Live Preview
                  </a>
                  {project.github_repo && (
                    <a
                      href={project.github_repo || "#"}
                      target="_blank"
                      className="flex items-center relative z-50 gap-2"
                      rel="noreferrer"
                    >
                      <GithubIcon className="w-5 text-normalText dark:text-normalDarkText" /> View Code
                    </a>
                  )}
                </div>
              </Card>
            ),
        )}
      </div>
      <div className="flex justify-center pt-10">
        <Link
          href="/projects"
          className="flex w-[260px] flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor/10 px-4 py-2 text-center text-primaryColor backdrop-blur-xl"
        >
          See More Projects
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectsGrid
