import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@primo-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    control: {
      type: null,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
