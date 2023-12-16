import { StorageSerializers, useColorMode, useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { locales, type Locale } from 'src/i18n';
import { Theme } from 'src/types/Theme';

export const useConfigStore = defineStore('config', () => {
  interface Config {
    locale: Locale,
    theme: Theme,
  }
  const systemLocale = (locales.filter((locale) => navigator.language.includes(locale)))[0] || 'en';
  const defaultConfig: Config = {
    locale: systemLocale,
    theme: (() => {
      const mode = useColorMode().value;
      if (mode === 'auto') {
        return 'light';
      }
      return mode;
    })(),
  };
  const config = useLocalStorage<Config>('app:config', defaultConfig, { serializer: StorageSerializers.object });
  return {
    value: config,
  };
});
