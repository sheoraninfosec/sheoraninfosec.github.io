"use client"

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/latex/SectionLabel'
import { HRule } from '@/components/latex/HRule'

function CVSectionHead({ title }: { title: string }) {
  return (
    <div className="mb-3 mt-6">
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: 'var(--ink-mid)',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </p>
      <HRule />
    </div>
  )
}

interface CVRowProps {
  title: string
  subtitle?: string
  date: string
  detail?: string
}

function CVRow({ title, subtitle, date, detail }: CVRowProps) {
  return (
    <div className="cv-row">
      <div>
        <p
          style={{
            fontFamily: 'var(--font-garamond)',
            fontSize: '1rem',
            fontWeight: 400,
            color: 'var(--ink)',
            lineHeight: 1.4,
          }}
        >
          {title}
        </p>
        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: 'var(--ink-mid)',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
        {detail && (
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--ink-light)',
              letterSpacing: '0.04em',
              marginTop: '0.2rem',
            }}
          >
            {detail}
          </p>
        )}
      </div>
      <span className="cv-date">{date}</span>
    </div>
  )
}

export function CV() {
  return (
    <motion.section
      id="cv"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16"
    >
      <SectionLabel number="5" title="Curriculum Vitae" id="section-cv" />

      <CVSectionHead title="Education" />
      <CVRow
        title="B.Tech, Computer Science & Engineering (Cybersecurity)"
        subtitle="University of Petroleum and Energy Studies (UPES), Dehradun"
        date="2023–2027"
        detail="Specialization: Cybersecurity · Dehradun, Uttarakhand"
      />

      <CVSectionHead title="Research & Projects" />
      <CVRow
        title="MindPhish v0.2.0 — NLP Phishing Detection"
        subtitle="UPES Minor Project · Jupyter Notebook · Python"
        date="2024–2025"
      />
      <CVRow
        title="Parasite — Stealthy RAT for Red Team Labs"
        subtitle="Personal Research · C++ · GitHub"
        date="2024"
      />
      <CVRow
        title="Academic DOMINATION Resources"
        subtitle="Cybersecurity Study Compendium · Markdown · GitHub"
        date="Ongoing"
      />
      <CVRow
        title="FileDeck — File Management Utility"
        subtitle="CLI Utility · Python · GitHub"
        date="2024"
      />

      <CVSectionHead title="Achievements" />
      <CVRow
        title="GitHub Quickdraw Achievement"
        subtitle="Awarded for swift first pull request activity on GitHub"
        date="2024"
      />
      <CVRow
        title="GitHub Pull Shark Achievement"
        subtitle="Awarded for consistent pull request contributions"
        date="2024"
      />
      <CVRow
        title="49 Public Repositories"
        subtitle="Active open-source contributor on GitHub"
        date="2025"
      />

      <CVSectionHead title="Profiles" />
      <div
        className="mt-3"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.9rem',
          color: 'var(--ink-mid)',
          lineHeight: 2,
        }}
      >
        {[
          { label: 'GitHub',   url: 'https://github.com/sheoraninfosec',         handle: 'github.com/sheoraninfosec'         },
          { label: 'LinkedIn', url: 'https://linkedin.com/in/jigesh-sheoran',     handle: 'linkedin.com/in/jigesh-sheoran'     },
          { label: 'X/Twitter',url: 'https://twitter.com/sheoraninfosec',         handle: '@sheoraninfosec'                    },
        ].map(({ label, url, handle }) => (
          <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--ink-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                width: 60,
                flexShrink: 0,
              }}
            >
              {label}
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="latex-link"
              style={{ fontSize: '0.875rem' }}
            >
              {handle}
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
