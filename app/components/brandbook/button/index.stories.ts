import type { Meta, StoryObj } from '@storybook/vue3'
import BrandbookButton from './index.vue'
import Wrapper from '../wrapper/index.vue'
//

const colorOptions: General.color[] = ['primary','secondary','success','warning','error','info', 'neutral']
const variantOptions: General.variant[] = ['solid', 'outline', 'ghost', 'link', 'soft']
const sizeOptions: General.size[] = ['xs', 'sm', 'md', 'lg', 'xl']

const meta: Meta<typeof BrandbookButton> = {
  title: 'Brandbook/Button',
  component: BrandbookButton,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Демонстрация Кнопки'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: colorOptions
    },
    variant: {
      control: 'select',
      options: variantOptions
    },
    size: {
      control: 'select',
      options: sizeOptions
    },
    label: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { BrandbookButton, Wrapper },
    setup() {
      return { args };
    },
    template: '<Wrapper> <BrandbookButton v-bind="args"/> </Wrapper>',
  }),
  args: {
    label: "Test",
    color: "primary",
  }
}
