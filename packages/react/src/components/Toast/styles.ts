import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: '300px',
  height: '50px',
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  border: '2px solid $green300',
  padding: '$2',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ToastTitle = styled(Toast.Title, {
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$md',
  marginBottom: '$2',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  width: '$4',
  height: '$4',
})
