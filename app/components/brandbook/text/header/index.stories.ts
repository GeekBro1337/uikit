import type { Meta, StoryObj } from '@storybook/vue3'
import BrandbookHeader from './index.vue'
import Wrapper from '../../wrapper/index.vue'

const meta: Meta<typeof BrandbookHeader> = {
    title: 'Brandbook/text/header',
    component: BrandbookHeader,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Демонстрация Заголовка',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        textPosition: {
            control: { type: 'select' },
            options: ['left', 'center', 'right', 'justify'],
            description: 'Контроль выравнивания текста',
        },
        underlineHeight: {
            control: { type: 'number' },
            description: 'Высота подчеркивания (в px)',
        },
        title: {
            control: 'text',
            description: 'Текст заголовка',
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => ({
        components: { BrandbookHeader, Wrapper },
        setup() {
            return { args }
        },
        template: '<Wrapper><BrandbookHeader v-bind="args" /></Wrapper>',
    }),
    args: {
        title: 'Test',
        textPosition: 'left',
        underlineHeight: 2,
    },
}