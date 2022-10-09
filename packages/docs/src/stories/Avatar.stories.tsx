import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@primo-ui/react'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lucianodiisouza.png',
    alt: 'Luciano Di Souza',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
