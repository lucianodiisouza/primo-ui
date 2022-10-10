import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps, ToastProvider } from '@primo-ui/react'
import { useCallback, useState } from 'react'

export default {
  title: 'Display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: false,
  },
  argTypes: {
    open: {
      onChange: { action: 'clicked' },
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      const handleClick = useCallback(() => {
        setOpen(!open)
      }, [open])

      return (
        <>
          <ToastProvider direction="right">
            <Button onClick={handleClick}>Open</Button>
            <Story open={open} onOpenChange={handleClick} />
          </ToastProvider>
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
