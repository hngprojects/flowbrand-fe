'use client'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '~/components/ui/dialog'

interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  children?: React.ReactNode
}

const BaseModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  children,
}: BaseModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-[#030D1F]/60" />
      <DialogContent
        style={{
          borderRadius: '32px',
          padding: '40px 32px',
          background: '#FFFFFF',
        }}
        className="w-[90%] border-[0.5px] md:w-120.75"
      >
        <DialogTitle className="sr-only">{title ?? 'Modal'}</DialogTitle>

        {children ? (
          children
        ) : (
          <div className="flex flex-col items-center gap-6 text-center">
            {icon && (
              <div
                style={{
                  width: '182px',
                  height: '182px',
                  padding: '40px',
                  borderRadius: '200px',
                  border: '0.5px solid #BFD1F1',
                  backgroundColor: '#EBF0FA',
                  boxShadow:
                    '0px 0px 0px 7px #326AD14D, 0px 0px 5.5px 0px #326AD1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </div>
            )}

            {title && (
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 500,
                  lineHeight: '120%',
                  color: '#030D1F',
                }}
              >
                {title}
              </h2>
            )}

            {subtitle && (
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#565D69' }}
              >
                {subtitle}
              </p>
            )}

            <div className="flex w-full flex-col gap-3">
              {onConfirm && confirmText && (
                <button
                  type="button"
                  onClick={onConfirm}
                  style={{
                    height: '48px',
                    borderRadius: '10px',
                    padding: '12px 24px',
                  }}
                  className="bg-primary text-primary-foreground w-full font-semibold transition-opacity hover:opacity-90"
                >
                  {confirmText}
                </button>
              )}
              {onCancel && cancelText && (
                <button
                  type="button"
                  onClick={onCancel}
                  style={{
                    height: '48px',
                    borderRadius: '10px',
                    padding: '12px 24px',
                  }}
                  className="border-primary text-primary w-full border font-semibold transition-opacity hover:opacity-90"
                >
                  {cancelText}
                </button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default BaseModal
