import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  const searchText = ref('');

  const isHttpRequest = (url: string) => {
    const protocols = ['http://', 'https://'];
    return protocols.some((p) => url.startsWith(p));
  };
  const isSearchWebSite = (url: string) => isHttpRequest(url) || url.startsWith('www.');
  const search = (query: string) => {
    searchText.value = '';
    if (isSearchWebSite(query)) {
      window.location.href = isHttpRequest(query) ? query : `https://${query}`;
      return;
    }
    window.location.href = `https://www.google.com/search?q=${query}`;
  };
  return {
    search,
    searchText,
  };
});
