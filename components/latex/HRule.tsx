interface HRuleProps {
  thick?: boolean
  className?: string
}

export function HRule({ thick, className = '' }: HRuleProps) {
  return (
    <hr
      className={`${thick ? 'hrule-thick' : 'hrule'} ${className}`}
      aria-hidden="true"
    />
  )
}
