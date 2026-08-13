type BackButtonProps = {
  onClick: () => void
  label?: string
}

export function BackButton({ onClick, label = 'Full Auckland view' }: BackButtonProps) {
  return (
    <button className="backButton" type="button" onClick={onClick}>
      <span aria-hidden="true">←</span>
      {label}
    </button>
  )
}
