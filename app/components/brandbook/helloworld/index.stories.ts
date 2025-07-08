import type { Meta, StoryObj } from '@storybook/vue3'
import ColorPaletteDemo from './index.vue'

const meta: Meta<typeof ColorPaletteDemo> = {
  title: 'Brandbook/HelloWorld/ColorPaletteDemo',
  component: ColorPaletteDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Демонстрация кастомной цветовой палитры Nuxt UI с использованием Tailwind CSS'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    // Можно добавить аргументы если понадобится
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}