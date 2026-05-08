"use client"

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/latex/SectionLabel'
import { HRule } from '@/components/latex/HRule'

export function Contact() {
  const channels = [
    { label: 'GitHub',    url: 'https://github.com/sheoraninfosec',       display: 'github.com/sheoraninfosec'       },
    { label: 'LinkedIn',  url: 'https://linkedin.com/in/jigesh-sheoran',   display: 'linkedin.com/in/jigesh-sheoran'   },
    { label: 'Twitter',   url: 'https://twitter.com/sheoraninfosec',       display: '@sheoraninfosec'                  },
  ]

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16"
    >
      <SectionLabel number="6" title="Correspondence" id="section-contact" />

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.95rem',
          color: 'var(--ink)',
          lineHeight: 1.85,
          marginBottom: '1.5rem',
        }}
      >
        For research collaboration, security discussions, or academic
        enquiries, reach out via any of the following channels:
      </p>

      <div className="mb-6 flex flex-col gap-1">
        {channels.map(({ label, url, display }) => (
          <div
            key={label}
            style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.875rem',
                color: 'var(--ink-mid)',
                width: 68,
                flexShrink: 0,
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.875rem',
                color: 'var(--ink-light)',
                marginRight: 4,
              }}
            >
              →
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
              style={{ fontSize: '0.875rem' }}
            >
              {display}
            </a>
          </div>
        ))}
      </div>

      <HRule thick />

      {/* Colophon */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--ink-light)',
          letterSpacing: '0.05em',
          lineHeight: 2,
          textAlign: 'center',
          paddingTop: '0.5rem',
          paddingBottom: '3rem',
        }}
      >
        <p>This document was last updated: May 2025</p>
        <p>Typeset in the spirit of LaTeX · Hosted on GitHub Pages</p>
      </div>
    </motion.section>
  )
}
