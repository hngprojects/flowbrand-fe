const CounterHeader = () => {
  return (
    <div className="space-y-2 text-center">
      <h3 className="text-foreground text-2xl font-bold">
        Interactive Counter
      </h3>
      {/* Architecture: hooks (logic) → small components (UI) → composed view → page */}
      <p className="text-sm text-muted-foreground">
        A simple interactive counter demonstrating component composition.
      </p>
    </div>
  )
}

export default CounterHeader
