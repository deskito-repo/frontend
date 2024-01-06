import { defineStore } from 'pinia';
import { computed, toRefs } from 'vue';
import { useCssVar, useStyleTag } from '@vueuse/core';
import { Theme } from 'src/types/Theme';
import { delay } from 'src/utils/delay';
import { useConfigStore } from './useConfigStore';

export const useThemeStore = defineStore('theme', () => {
  const configStore = useConfigStore();
  const { theme } = toRefs(configStore.value);
  const themes = {
    light: {
      color: '#fff',
      style: {
        '--app-text-color': '0, 0%, 10%',
        '--app-bg-color': '0, 0%, 100%',
      },
    },
    dark: {
      color: '#000',
      style: {
        '--app-text-color': '0, 0%, 100%',
        '--app-bg-color': '0, 0%, 10%',
      },
    },
  };
  const { css } = useStyleTag('');
  const setTheme = async (key: Theme) => {
    css.value = '* { transition: all .2s ease-out }';
    theme.value = key;
    Object
      .entries(themes[key].style || themes.light)
      .map(([key, val]) => useCssVar(key, document.body).value = val);
    delay(250).then(() => css.value = '');
  };
  setTheme(theme.value);
  return {
    themes: computed(() => themes),
    currentTheme: computed(() => theme.value),
    set: setTheme,
  };
});
