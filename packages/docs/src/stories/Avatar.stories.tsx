import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@imp-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://static.wikia.nocookie.net/muonline/images/b/b3/Imp.png',
    alt: 'Imp',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
