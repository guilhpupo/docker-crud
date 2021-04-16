import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'
import { Plus } from '@styled-icons/bootstrap/Plus'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Adicionar'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Adicionar',
  icon: <Plus />
}

export const onlyIcon: Story = (args) => <Button {...args} />

onlyIcon.args = {
  size: 'small',
  icon: <Plus />
}
