"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/data'

export function Navigation() {
  const [activeId, setActiveId] = useState<string>('header')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  const NavContent = () => (
    <nav aria-label="Table of contents">
      <p
        style={{
          fontFamily: 'var(--font-garamond)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          color: 'var(--ink-mid)',
          fontVariant: 'small-caps',
          marginBottom: '0.6rem',
        }}
      >
        Table of Contents
      </p>
      <div style={{ height: 1, background: 'var(--rule)', marginBottom: '0.6rem' }} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className={`nav-item ${activeId === item.id ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              <span style={{ color: 'var(--crimson)', marginRight: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem' }}>
                § {item.number}
              </span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="nav-sidebar" style={{ paddingTop: '6rem' }}>
        <NavContent />
      </aside>

      {/* Mobile hamburger button */}
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 50 }}>
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          style={{
            background: 'var(--paper)',
            border: '1px solid var(--rule)',
            borderRadius: 2,
            padding: '6px 8px',
            cursor: 'pointer',
            color: 'var(--ink)',
            boxShadow: '0 1px 4px rgba(26,23,20,0.08)',
          }}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(26,23,20,0.35)', zIndex: 40 }}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'fixed',
                top: 0, left: 0, bottom: 0,
                width: 220,
                background: 'var(--paper)',
                borderRight: '1px solid var(--rule)',
                zIndex: 50,
                padding: '2rem 1.25rem',
                overflowY: 'auto',
              }}
            >
              <NavContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
