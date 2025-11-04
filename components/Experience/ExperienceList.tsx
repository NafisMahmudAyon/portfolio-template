"use client"
import { oswald, poppins } from "@/app/fonts"
import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import React, { useRef } from "react"
import { Badge, Timeline, TimelineItem } from "../aspect-ui"
import portfolioData from "@/data/portfolio-data.json"

const ExperienceList = () => {
  const { experience } = portfolioData
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="mx-auto max-w-[760px] px-4"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <Timeline position="right" lineStyle="dashed">
        {experience.map((exp, index) => (
          <TimelineItem key={exp.id} className={`text-text-muted ${poppins.className}`}>
            <h3 className={`font-bold text-text ${oswald.className}`}>
              {exp.title} — {exp.company}
            </h3>
            <p className="text-sm">
              {exp.period} | {exp.location} |{" "}
              <Link
                href={`https://${exp.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryColor hover:underline"
              >
                {exp.website}
              </Link>
            </p>
            <p className="mt-2">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.technologies.map((tech, i) => (
                <Badge variant="outline" key={i} className="">
                  {tech}
                </Badge>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  )
}

export default ExperienceList
