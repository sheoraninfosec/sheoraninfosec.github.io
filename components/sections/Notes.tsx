"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { NOTES } from '@/lib/data'
import { SectionLabel } from '@/components/latex/SectionLabel'

export function Notes() {
  return (
    <motion.section
      id="notes"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16"
    >
      <SectionLabel number="4" title="Learning Notes" id="section-notes" />

      <div>
        {NOTES.map((note, i) => (
          <motion.div
            key={note.id}
            className="bib-entry"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
          >
            {/* ID */}
            <div className="bib-id">[{note.id}]</div>

            {/* Content */}
            <div>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'var(--ink)',
                    lineHeight: 1.4,
                  }}
                >
                  {note.title}
                </h3>
                {note.url !== '#' && (
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: 'var(--crimson)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      flexShrink: 0,
                    }}
                    className="latex-link"
                  >
                    View <ArrowRight size={9} />
                  </a>
                )}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--ink-light)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.7,
                  marginTop: '0.25rem',
                  marginBottom: '0.2rem',
                }}
              >
                {note.topics.join(' · ')}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.8rem',
                  color: 'var(--ink-light)',
                }}
              >
                — Personal Study Notes, {note.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
