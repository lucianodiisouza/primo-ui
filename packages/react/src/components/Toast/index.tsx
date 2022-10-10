import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastClose,
  ToastContent,
} from './styles'

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastContent>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContent>
      <ToastClose>
        <X weight='bold' />
      </ToastClose>
    </ToastContainer>
  )
}

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
}

Toast.displayName = 'Toast'
