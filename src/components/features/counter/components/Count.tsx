import { AnimatePresence, motion } from 'framer-motion'

interface CountProps {
  count: number
}
const Count = ({ count }: CountProps) => {
  return (
    <div className="relative flex h-32 w-full items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`text-7xl font-black tabular-nums ${
            count > 0
              ? 'text-success'
              : count < 0
                ? 'text-error'
                : 'text-foreground'
          }`}
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default Count
