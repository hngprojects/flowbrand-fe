'use client'

import { Dialog, DialogContent, DialogTitle } from '~/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import WaitlistSuccess from './components/WaitlistSuccess'
import WaitlistActions from './components/WaitlistActions'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'FlowBrand',
        text: 'Join the FlowBrand waitlist!',
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        style={{
          borderRadius: '32px',
          padding: '40px 32px',
        }}
        className="w-[90%] border-[0.5px] md:w-120.75"
      >
        <VisuallyHidden>
          <DialogTitle>Waitlist Success</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col items-center gap-6">
          <WaitlistSuccess />
          <WaitlistActions onDone={onClose} onShare={handleShare} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WaitlistModal
