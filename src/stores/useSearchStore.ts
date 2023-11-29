import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', () => {
  const search = (query: string) => {
    window.location.href = `https://www.google.com/search?q=${query}`;
  };
  return {
    search,
  };
});
