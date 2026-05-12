interface StepProgressProps {
  step: number
  total: number
}

export default function StepProgress({ step, total }: StepProgressProps) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-[13px] text-gray-500">
        <span className="text-success font-semibold">{step}</span> of {total}{' '}
        steps completed
      </p>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-[5px] flex-1 rounded-full transition-colors duration-500 ${
              i < step ? 'bg-success' : 'bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
