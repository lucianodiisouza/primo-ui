import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@primo-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia quis tempore in quia ducimus placeat voluptatem quas voluptas quisquam?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
