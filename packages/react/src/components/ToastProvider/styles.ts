import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

// Toast Provider
export const Provider = styled(Toast.Provider, {})

export const ViewPort = styled(Toast.Viewport, {
  height: '150px',
  zIndex: 999,
  border: '1px solid red',
})
