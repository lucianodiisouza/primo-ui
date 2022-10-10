import { ReactNode } from 'react'
import { Provider, ViewPort } from './styles'

export function ToastProvider({
  children,
  direction = 'up',
}: ToastProviderProps) {
  return (
    <Provider swipeDirection={direction} duration={500}>
      {children}
      <ViewPort />
    </Provider>
  )
}

type ToastProviderProps = {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
}
