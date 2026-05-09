interface WaitlistActionsProps {
  onDone: () => void
  onShare: () => void
}

const WaitlistActions = ({ onDone, onShare }: WaitlistActionsProps) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <button
        onClick={onDone}
        style={{ height: '48px', borderRadius: '10px', padding: '12px 24px' }}
        className="bg-primary text-primary-foreground w-full font-semibold transition-opacity hover:opacity-90"
      >
        Done
      </button>
      <button
        onClick={onShare}
        style={{ height: '48px', borderRadius: '10px', padding: '12px 24px' }}
        className="border-primary text-primary w-full border font-semibold transition-opacity hover:opacity-90"
      >
        Share with Friends
      </button>
    </div>
  )
}

export default WaitlistActions
