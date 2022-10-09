import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green500',
  borderRadius: '$md',
})

export function App() {
  return <Button>Hello</Button>
}
