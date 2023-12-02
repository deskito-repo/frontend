import { defineStore } from 'pinia';
import {
  computed, ref,
} from 'vue';
import { useTextCalculator } from 'src/composables/useTextCalculator';
import { api } from 'src/utils/api';
import { useSearchStore } from './useSearchStore';

export const useSuggestionStore = defineStore('suggestion', () => {
  const suggestions = ref<any[]>([]);

  const abortController = new AbortController();
  const base = api.url('/api/suggestion').signal(abortController);
  const requestSuggest = async (text: string) => {
    const data = await base.url(`/${text}`).get().json<string[]>();
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
