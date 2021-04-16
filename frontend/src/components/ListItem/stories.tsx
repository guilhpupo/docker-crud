import { Story, Meta } from '@storybook/react/types-6-0'
import ListItem, { ListItemProps } from '.'

export default {
  title: 'ListItem',
  component: ListItem,
  args: {
    name: 'Maçã',
    quantity: 3
  }
} as Meta

export const Default: Story<ListItemProps> = (args) => <ListItem {...args} />
