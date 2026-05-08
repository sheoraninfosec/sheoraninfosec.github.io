interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return <span className="latex-tag">{label}</span>
}
