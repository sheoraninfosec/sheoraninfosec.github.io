"use client"

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { TOOLS, SKILLS } from '@/lib/data'
import { SectionLabel } from '@/components/latex/SectionLabel'
import { Tag } from '@/components/latex/Tag'
import { HRule } from '@/components/latex/HRule'

export function Tools() {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16"
    >
      <SectionLabel number="3" title="Tools &amp; Technical Arsenal" id="section-tools" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {/* Left column — Tools Built */}
        <div>
          <p
            className="small-caps mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--ink-mid)',
              textTransform: 'uppercase',
            }}
          >
            Tools Built
          </p>

          <div className="flex flex-col gap-0">
            {TOOLS.map((tool, i) => (
              <div key={tool.name}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '0.5rem 1rem',
                    alignItems: 'start',
                    padding: '0.6rem 0',
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="latex-link"
                        style={{
                          fontFamily: 'var(--font-garamond)',
                          fontSize: '1rem',
                          fontWeight: 500,
                        }}
                      >
                        {tool.name}
                      </a>
                      {tool.tags.map(t => <Tag key={t} label={t} />)}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '0.85rem',
                        color: 'var(--ink-mid)',
                        lineHeight: 1.6,
                      }}
                    >
                      {tool.description}
                    </p>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${tool.name} on GitHub`}
                    style={{ color: 'var(--rule-strong)', marginTop: 4 }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--crimson)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--rule-strong)')}
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
                {i < TOOLS.length - 1 && (
                  <div style={{ height: 1, background: 'var(--paper-dark)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Skills */}
        <div>
          <p
            className="small-caps mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--ink-mid)',
              textTransform: 'uppercase',
            }}
          >
            Skills &amp; Technologies
          </p>

          <div className="flex flex-col gap-4">
            {SKILLS.map(group => (
              <div key={group.category}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--crimson)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {group.category}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.875rem',
                    color: 'var(--ink-mid)',
                    lineHeight: 1.7,
                  }}
                >
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
