'use client'
import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence, MotionProps } from 'framer-motion'

interface AccordionProps extends MotionProps {
  i: number
  expanded: boolean | number
  setExpanded: React.Dispatch<React.SetStateAction<boolean | number>>
  children?: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  children,
  ...motionProps
}) => {
  const isOpen = i === expanded

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        onClick={() => setExpanded(isOpen ? false : i)}
        {...motionProps}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const Example: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean | number>(0)

  return (
    <div>
      {accordionIds.map(i => (
        <Accordion key={i} i={i} expanded={expanded} setExpanded={setExpanded}>
          <ContentPlaceholder />
        </Accordion>
      ))}
    </div>
  )
}

const accordionIds = [0, 1, 2, 3]

// Placeholder content component
const ContentPlaceholder: React.FC = () => (
  <div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
    Placeholder content
  </div>
)
