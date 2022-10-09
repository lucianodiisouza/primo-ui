import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@primo-ui/react'

export default {
  title: 'Typograph/Headings',
  component: Heading,
  args: {
    children: 'Custom title heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomElement: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
