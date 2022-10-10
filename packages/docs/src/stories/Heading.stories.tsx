import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@primo-ui/react'

export default {
  title: 'Typograph/Headings',
  component: Heading,
  args: {
    children: 'Custom title heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg ', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomElement: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão heading sempre será um `h2`, mas podemos alterar isso usando a propriedade `as`',
      },
    },
  },
}
