"use client"
import React, { useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import HeadingSection from "../HeadingSection"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import portfolioData from "@/data/portfolio-data.json"

const About = () => {
  const { personal } = portfolioData
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  return (
    <motion.div ref={ref} className="container" variants={containerVariants} initial="hidden" animate={controls}>
      <HeadingSection
        text="About Me"
        className="hidden lg:inline-block"
        variants={{
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
              delay: 0.1,
            },
          },
        }}
      />
      <Heading
        text="Who am I?"
        className="text-center md:text-left "
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.2,
            },
          },
        }}
      />
      {personal.bio.map((paragraph, index) => (
        <Paragraph
          key={index}
          className="text-balance w-[85%] mx-auto text-center md:w-full md:text-left"
          text={paragraph}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.3 + index * 0.1,
              },
            },
          }}
        />
      ))}
    </motion.div>
  )
}

export default About
