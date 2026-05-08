import { HRule } from './HRule'

interface SectionLabelProps {
  number: string
  title: string
  id?: string
}

export function SectionLabel({ number, title, id }: SectionLabelProps) {
  return (
    <div id={id} className="mb-6">
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="section-number shrink-0"
          aria-hidden="true"
        >
          § {number}
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-garamond)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: 'var(--ink)',
            lineHeight: '1.3',
          }}
        >
          {title}
        </h2>
      </div>
      <HRule />
    </div>
  )
}
