"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HELLO_WORDS } from '@/lib/data'

type Phase = 'cycling' | 'greeting' | 'ruling' | 'exiting' | 'done'

interface EntryScreenProps {
  onComplete: () => void
}

export default function EntryScreen({ onComplete }: EntryScreenProps) {
  const [phase, setPhase] = useState<Phase>('cycling')
  const [wordIndex, setWordIndex] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)
  const [ruleWidth, setRuleWidth] = useState(0)
  const [slideUp, setSlideUp] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clear = () => { if (timerRef.current) clearTimeout(timerRef.current) }
  const delay = (ms: number) => new Promise<void>(r => { timerRef.current = setTimeout(r, ms) })

  useEffect(() => {
    let cancelled = false

    async function run() {
      // Cycle through greeting words
      for (let i = 0; i < HELLO_WORDS.length; i++) {
        if (cancelled) return
        setWordIndex(i)
        setWordVisible(true)
        await delay(900)
        if (cancelled) return
        setWordVisible(false)
        await delay(400)
      }

      if (cancelled) return

      // Show "Hello, I'm Jigesh."
      setPhase('greeting')
      await delay(1400)
      if (cancelled) return

      // Sweep the rule
      setPhase('ruling')
      setRuleWidth(100)
      await delay(700)
      if (cancelled) return

      // Slide up
      setPhase('exiting')
      setSlideUp(true)
      await delay(900)
      if (cancelled) return

      setPhase('done')
      localStorage.setItem('hasVisited', '1')
      onComplete()
    }

    run()
    return () => {
      cancelled = true
      clear()
    }
  }, [onComplete])

  const currentWord = HELLO_WORDS[wordIndex]

  return (
    <div
      className="entry-screen"
      style={{
        transform: slideUp ? 'translateY(-100vh)' : 'translateY(0)',
        transition: slideUp ? '0.85s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        {/* Cycling words */}
        {phase === 'cycling' && (
          <AnimatePresence mode="wait">
            {wordVisible && (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontStyle: 'italic',
                  color: '#f5f0e8',
                  direction: currentWord?.rtl ? 'rtl' : 'ltr',
                  position: 'absolute',
                  userSelect: 'none',
                }}
              >
                {currentWord?.word}
              </motion.span>
            )}
          </AnimatePresence>
        )}

        {/* "Hello, I'm Jigesh." */}
        {(phase === 'greeting' || phase === 'ruling' || phase === 'exiting') && (
          <div className="flex flex-col items-center gap-8 w-full px-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                fontStyle: 'italic',
                color: '#f5f0e8',
                textAlign: 'center',
              }}
            >
              Hello, I&apos;m Jigesh.
            </motion.p>

            {/* Sweeping rule */}
            {(phase === 'ruling' || phase === 'exiting') && (
              <div
                style={{
                  width: `${ruleWidth}%`,
                  maxWidth: '480px',
                  height: '1px',
                  background: '#f5f0e8',
                  transition: 'width 600ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
