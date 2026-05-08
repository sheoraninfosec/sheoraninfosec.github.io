"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { RESEARCH, type ResearchItem } from '@/lib/data'
import { SectionLabel } from '@/components/latex/SectionLabel'
import { Tag } from '@/components/latex/Tag'
import { HRule } from '@/components/latex/HRule'

function ProjectCard({ item }: { item: ResearchItem }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="paper-card mb-6">
      {/* Card header */}
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <span className="type-badge">{item.type}</span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--ink-light)',
            letterSpacing: '0.05em',
            paddingTop: 2,
          }}
        >
          {item.date}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-garamond)',
          fontSize: '1.2rem',
          fontWeight: 400,
          color: 'var(--ink)',
          lineHeight: 1.4,
          marginBottom: '0.3rem',
        }}
      >
        {item.title}
      </h3>

      {/* Author line */}
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: 'var(--ink-mid)',
          marginBottom: '0.75rem',
        }}
      >
        Jigesh Sheoran · UPES, Dehradun
      </p>

      {/* Abstract */}
      <p
        className={`${expanded ? '' : 'truncated'}`}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.9rem',
          color: 'var(--ink)',
          lineHeight: 1.8,
          marginBottom: '0.5rem',
        }}
      >
        {item.abstract}
      </p>

      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--crimson)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Read more ↓
        </button>
      )}

      {/* Warning */}
      {item.warning && (
        <p className="warning-badge mb-3">⚠ {item.warning}</p>
      )}

      {/* Divider */}
      <HRule />

      {/* Keywords + Link */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-wrap gap-2">
          {item.keywords.map(kw => (
            <Tag key={kw} label={kw} />
          ))}
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--crimson)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
          className="latex-link"
        >
          View on GitHub <ExternalLink size={10} />
        </a>
      </div>
    </div>
  )
}

export function Research() {
  return (
    <motion.section
      id="research"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16"
    >
      <SectionLabel number="2" title="Research &amp; Projects" id="section-research" />

      {RESEARCH.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
        >
          <ProjectCard item={item} />
        </motion.div>
      ))}
    </motion.section>
  )
}
