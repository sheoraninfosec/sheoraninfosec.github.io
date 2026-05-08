"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Header } from '@/components/sections/Header'
import { AbstractSection } from '@/components/sections/AbstractSection'
import { Research } from '@/components/sections/Research'
import { Tools } from '@/components/sections/Tools'
import { Notes } from '@/components/sections/Notes'
import { CV } from '@/components/sections/CV'
import { Contact } from '@/components/sections/Contact'

const EntryScreen = dynamic(() => import('@/components/EntryScreen'), { ssr: false })

export default function Home() {
  const [showEntry, setShowEntry] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (hasVisited) {
      setShowEntry(false)
      setContentVisible(true)
    } else {
      setShowEntry(true)
    }
  }, [])

  const handleEntryComplete = () => {
    setShowEntry(false)
    setContentVisible(true)
  }

  return (
    <>
      {showEntry && <EntryScreen onComplete={handleEntryComplete} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ minHeight: '100vh', background: 'var(--paper)' }}
      >
        {/* Desktop: 3-column grid with sidebar nav */}
        <div className="hidden md:block">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '200px minmax(0, 640px) 1fr',
              gap: '0 2rem',
              maxWidth: 1100,
              margin: '0 auto',
              padding: '0 1.5rem',
            }}
          >
            {/* Left — sticky ToC navigation */}
            <Navigation />

            {/* Centre — document body */}
            <main id="main-content">
              <Header />
              <AbstractSection />
              <Research />
              <Tools />
              <Notes />
              <CV />
              <Contact />
            </main>

            {/* Right gutter */}
            <div />
          </div>
        </div>

        {/* Mobile: single column + hamburger nav */}
        <div className="md:hidden">
          <Navigation />
          <main id="main-content-mobile" style={{ padding: '0 0 2rem' }}>
            <Header />
            <div style={{ padding: '0 1.25rem' }}>
              <AbstractSection />
              <Research />
              <Tools />
              <Notes />
              <CV />
              <Contact />
            </div>
          </main>
        </div>
      </motion.div>
    </>
  )
}
