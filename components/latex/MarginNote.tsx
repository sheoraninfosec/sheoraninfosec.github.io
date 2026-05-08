interface MarginNoteProps {
  children: React.ReactNode
}

export function MarginNote({ children }: MarginNoteProps) {
  return (
    <div
      className="margin-note"
      aria-label="Margin note"
    >
      {children}
    </div>
  )
}
