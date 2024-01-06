import { defineStore } from 'pinia';
import { Bookmark } from 'src/types/Bookmark';
import { computed, ref } from 'vue';

export const useBookmarkStore = defineStore('bookmark', () => {
  const bookmarks = ref<Bookmark[]>(Array(14).fill({ type: 0, title: 'z' }));

  const insertOne = (bookmark: Bookmark) => bookmarks.value.push(bookmark);
  // const updateOne = (bookmark: Bookmark) => {
  // };
  const deleteOne = (idx: number) => bookmarks.value.splice(idx, 1);
  return {
    bookmarks: computed(() => bookmarks.value),
    insertOne,
    deleteOne,
  };
});
