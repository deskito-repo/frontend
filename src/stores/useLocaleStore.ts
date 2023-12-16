import { defineStore } from 'pinia';
import { computed } from 'vue';
import { type Locale } from 'src/i18n';
import { i18n } from 'src/utils/i18n';
import { useConfigStore } from './useConfigStore';

export const useLocaleStore = defineStore('locale', () => {
  const configStore = useConfigStore();
  const { locale } = i18n.global;
  locale.value = configStore.value.locale;

  const update = (newLocale: Locale) => {
    configStore.value.locale = newLocale;
    locale.value = newLocale;
  };
  return {
    value: computed(() => locale.value),
    update,
  };
});
