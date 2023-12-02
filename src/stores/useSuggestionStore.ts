import { defineStore } from 'pinia';
import { useFetchApi } from 'src/composables/useFetchApi';
import {
  computed, ref,
} from 'vue';

export const useSuggestionStore = defineStore('suggestion', () => {
  const suggestions = ref<any[]>([]);

  const { api } = useFetchApi('/api/suggestion');
  const requestSuggest = async (text: string) => {
    const { data, error } = await api(text).json<any[]>();
    if (error.value || data.value === null) {
      return;
    }
    suggestions.value = data.value;
  };
  const reset = () => { suggestions.value = []; };

  return {
    value: computed(() => suggestions.value),
    requestSuggest,
    reset,
  };
});
