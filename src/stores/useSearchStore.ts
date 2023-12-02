import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  const searchText = ref('');
  const search = (query: string) => {
    searchText.value = '';
    window.location.href = `https://www.google.com/search?q=${query}`;
  };
  return {
    search,
    searchText,
  };
});
