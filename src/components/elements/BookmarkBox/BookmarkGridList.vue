<script lang="ts" setup>
import { useBookmarkStore } from 'src/stores/useBookmarkStore';
import { storeToRefs } from 'pinia';
import { useDialog } from 'src/composables/useDialog';
import useBookmarkEditModal from 'src/composables/useBookmarkEditModal';
import BookmarkGrid from './BookmarkGrid.vue';

const bookmarkStore = useBookmarkStore();
const { bookmarks } = storeToRefs(bookmarkStore);
const dialog = useDialog();
const openModal = (id: number) => {
  const modal = useBookmarkEditModal({ id });
  modal.open();
};
const deleteOne = async (idx: number) => {
  const { isCancelled } = await dialog.confirm('삭제하시겠습니까?');
  if (isCancelled) {
    return;
  }
  bookmarkStore.deleteOne(idx);
};
</script>
<template>
  <div class="grid grid-cols-5 gap-1">
    <BookmarkGrid
      v-for="bookmark, idx in bookmarks"
      :key="idx"
      v-bind="bookmark"
      @update="openModal(idx)"
      @delete="deleteOne(idx)"
    />
  </div>
</template>
<style lang="scss" scoped>
</style>
