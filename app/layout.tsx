import type { Metadata } from 'next'
import { EB_Garamond, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jigesh Sheoran — Cybersecurity Research',
  description: 'Security Researcher · Red & Purple Teaming · Threat Hunter · UPES 2027',
  keywords: ['cybersecurity', 'red teaming', 'purple teaming', 'threat hunting', 'NLP', 'phishing detection', 'UPES'],
  authors: [{ name: 'Jigesh Sheoran', url: 'https://github.com/sheoraninfosec' }],
  openGraph: {
    title: 'Jigesh Sheoran — Cybersecurity Research',
    description: 'Security Researcher · Red & Purple Teaming · Threat Hunter · UPES 2027',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
      style={{
        '--font-garamond': `var(${garamond.variable})`,
        '--font-serif': `var(${sourceSerif.variable})`,
        '--font-mono': `var(${jetbrainsMono.variable})`,
      } as React.CSSProperties}
    >
      <body>{children}</body>
    </html>
  )
}
