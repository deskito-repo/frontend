import { defineStore } from 'pinia';
import {
  computed, ref,
} from 'vue';
import { useTextCalculator } from 'src/composables/useTextCalculator';
import { defineApi } from 'src/utils/defineApi';
import { useSearchStore } from './useSearchStore';

export const useSuggestionStore = defineStore('suggestion', () => {
  const suggestions = ref<any[]>([]);

  const { api, abort } = defineApi('/api/suggestion');

  const requestSuggest = async (text: string) => {
    abort();
    const data = await api(`/${text}`).get().json<string[]>();
    if (!data) {
      return;
    }
    suggestions.value = data;
  };
  const reset = () => { suggestions.value = []; };

  const searchStore = useSearchStore();

  const { calculate } = useTextCalculator();
  interface Suggestion {
    type: 'suggestion' | 'calculation';
    text: string;
  }
  const list = computed(() => {
    let list: Suggestion[] = [];

    if (!searchStore.searchText) {
      return [];
    }

    const calculation = calculate(searchStore.searchText);
    if (calculation) {
      return [{
        type: 'calculation',
        text: new Intl.NumberFormat().format(+calculation),
      }];
    }

    const suggestionList = suggestions.value
      .filter((_, idx) => idx <= 50)
      .map((text): Suggestion => ({
        type: 'suggestion',
        text,
      }));
    list = [...list, ...suggestionList];

    return list;
  });
  return {
    value: computed(() => suggestions.value),
    requestSuggest,
    reset,
    list,
  };
});
