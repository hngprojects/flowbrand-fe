import CounterView from '~/views/CounterView'

const LandingPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-4 dark:bg-black">
      <div className="w-full max-w-4xl">
        <CounterView />
      </div>
    </main>
  )
}

export default LandingPage
