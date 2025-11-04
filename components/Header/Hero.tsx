"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { poppins } from "@/app/fonts"
import portfolioData from "@/data/portfolio-data.json"

const Hero = () => {
  const { personal } = portfolioData
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    ease: "easeInOut",
  }

  return (
    <div className="mt-4 grid min-h-[600px] content-center gap-6 justify-self-center px-4 md:mt-10 md:grid-cols-2 md:px-8 lg:mt-20 lg:px-16">
      <div className="row-start-2 grid content-center md:row-start-1">
        <motion.h2
          className="text-center text-2xl text-headingText dark:text-headingDarkText md:text-left"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={spring}
        >
          Hi, I&apos;m
        </motion.h2>
        <motion.h1
          className="text-center text-4xl font-medium text-headingText dark:text-headingDarkText md:text-left"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          {personal.fullName}
        </motion.h1>
        <motion.p
          className={`mt-4 text-pretty text-center text-lg font-normal text-normalText dark:text-normalDarkText md:text-left ${poppins.className}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.4 }}
        >
          A passionate{" "}
          <span className="text-primaryColor transition-all duration-150 ease-in-out hover:border-b-2 hover:border-primaryColor">
            {personal.title}
          </span>{" "}
          with 4 years of experience in creating user-friendly, visually appealing websites with a strong focus on{" "}
          <span className="text-primaryColor transition-all duration-150 ease-in-out hover:border-b-2 hover:border-primaryColor">
            UI/UX
          </span>{" "}
          design.
        </motion.p>
      </div>
      <div className="grid place-items-center">
        <motion.div
          className="aspect-square w-[280px] md:w-[90%] overflow-hidden rounded-2xl border border-primaryColor/25 drop-shadow-lg md:h-auto md:max-w-[400px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={personal.profileImage || "/placeholder.svg"}
            alt={personal.fullName}
            width={400}
            height={400}
            className="rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
