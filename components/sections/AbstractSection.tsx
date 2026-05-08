"use client"

import { motion } from 'framer-motion'
import { Abstract } from '@/components/latex/Abstract'
import { SectionLabel } from '@/components/latex/SectionLabel'

const KEYWORDS = [
  'Red Teaming', 'Purple Teaming', 'Threat Hunting',
  'Adversarial ML', 'NLP', 'Phishing Detection',
  'C++', 'Python', 'UPES',
]

export function AbstractSection() {
  return (
    <motion.section
      id="abstract"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16"
    >
      <SectionLabel number="1" title="Abstract" id="section-abstract" />
      <Abstract keywords={KEYWORDS}>
        Jigesh Sheoran is a cybersecurity student and researcher at the University of
        Petroleum and Energy Studies (UPES), Dehradun, graduating in 2027. His work
        focuses on adversarial tooling, red and purple team operations, threat hunting,
        and the application of machine learning to phishing detection. This document
        presents his research contributions, published tools, learning notes, and
        professional journey.
      </Abstract>
    </motion.section>
  )
}
