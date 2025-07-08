import type { Preview } from '@storybook-vue/nuxt'
import '../types/index.d.ts'
import { createI18n } from 'vue-i18n'
import en from '../i18n/locales/en'
import ru from '../i18n/locales/ru'
import kk from '../i18n/locales/kk'

// Создаем i18n экземпляр для Storybook
const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    kk
  }
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    // Добавляем глобальные параметры для i18n
    i18n: {
      locale: 'ru',
      locales: [
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'kk', name: 'Қазақша', flag: '🇰🇿' }
      ]
    }
  },
  // Добавляем глобальные декораторы для i18n
  decorators: [
    (story, context) => {
      // Получаем локаль из параметров истории
      const locale = context.parameters.i18n?.locale || 'ru'
      
      // Обновляем локаль в i18n
      i18n.global.locale.value = locale
      
      return {
        setup() {
          return { story }
        },
        template: '<story />',
        global: {
          plugins: [i18n]
        }
      }
    }
  ]
};

export default preview;