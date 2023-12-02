import { defineStore } from 'pinia';
import { useFetchApi } from 'src/composables/useFetchApi';
import {
  computed, ref,
} from 'vue';
import { useTextCalculator } from 'src/composables/useTextCalculator';
import { useSearchStore } from './useSearchStore';

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
