import { StoryObj, Meta } from '@storybook/react'
import { Button } from '@primo-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Primary',
  },
}

export const Secondary: StoryObj = {
  args: {
    children: 'Secondary',
  },
}
