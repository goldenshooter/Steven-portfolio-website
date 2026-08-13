type BackButtonProps = {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button className="backButton" type="button" onClick={onClick}>
      <span aria-hidden="true">←</span>
      Full Auckland view
    </button>
  )
}
