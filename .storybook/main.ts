import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  "stories": [
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook-vue/nuxt",
    "options": {}
  },
  "typescript": {
    check: true,
  },
  "viteFinal": async (config) => {
    // Добавляем поддержку i18n
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~/i18n': '/home/BNik_ssh/nuxt_ui_kit/i18n',
        '~/locales': '/home/BNik_ssh/nuxt_ui_kit/i18n/locales',
        '~types': "/home/BNik_ssh/nuxt_ui_kit/types"
      };
    }
    return config;
  }
};

export default config;