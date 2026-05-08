interface AbstractProps {
  children: React.ReactNode
  keywords?: string[]
}

export function Abstract({ children, keywords }: AbstractProps) {
  return (
    <div className="latex-abstract">
      <p
        className="small-caps text-center mb-4"
        style={{
          fontFamily: 'var(--font-garamond)',
          fontWeight: 500,
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          color: 'var(--ink-mid)',
        }}
      >
        Abstract
      </p>
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          lineHeight: '1.85',
          color: 'var(--ink)',
        }}
      >
        {children}
      </div>
      {keywords && keywords.length > 0 && (
        <p
          className="mt-4"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.875rem',
            color: 'var(--ink-mid)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-garamond)',
              fontStyle: 'italic',
              fontWeight: 500,
            }}
          >
            Keywords:{' '}
          </span>
          {keywords.join(', ')}
        </p>
      )}
    </div>
  )
}
