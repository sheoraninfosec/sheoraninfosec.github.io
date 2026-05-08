"use client"

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { PROFILE } from '@/lib/data'
import { HRule } from '@/components/latex/HRule'

export function Header() {
  const links = [
    { href: PROFILE.links.github,   label: 'GitHub'    },
    { href: PROFILE.links.linkedin, label: 'LinkedIn'  },
    { href: PROFILE.links.twitter,  label: 'X/Twitter' },
  ]

  return (
    <motion.section
      id="header"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      className="py-16 px-4"
      style={{ maxWidth: 640, margin: '0 auto' }}
    >
      <div className="text-center mb-8">
        <h1
          style={{
            fontFamily: 'var(--font-garamond)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 400,
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          {PROFILE.name}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'var(--ink-mid)',
            lineHeight: 1.6,
          }}
        >
          {PROFILE.tagline}
          <br />
          {PROFILE.university} · Class of {PROFILE.year}
        </p>

        <div
          style={{
            width: 120,
            height: 1,
            background: 'var(--rule-strong)',
            margin: '1.5rem auto',
          }}
          aria-hidden="true"
        />

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--ink-light)',
            letterSpacing: '0.05em',
            lineHeight: 1.9,
          }}
        >
          github.com/{PROFILE.handle} · {PROFILE.location}
          <br />
          @{PROFILE.handle} · linkedin.com/in/jigesh-sheoran
        </p>

        <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--ink-mid)',
                border: '1px solid var(--rule)',
                padding: '4px 12px',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'border-color 200ms ease, color 200ms ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--rule-strong)'
                el.style.color = 'var(--crimson)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--rule)'
                el.style.color = 'var(--ink-mid)'
              }}
            >
              <ExternalLink size={9} />
              {label}
            </a>
          ))}
        </div>

        <p
          className="mt-6"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--ink-light)',
            letterSpacing: '0.05em',
          }}
        >
          Submitted to: The Open Web &nbsp;·&nbsp; Date: 2025
        </p>
      </div>

      <HRule thick />
    </motion.section>
  )
}
