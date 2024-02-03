<script lang="ts" setup>
import { throttledRef, useElementSize } from '@vueuse/core';
import { computed, ref } from 'vue';
import { VueDraggableNext as Draggable } from 'vue-draggable-next';
import BookmarkRow, { type Props as BookmarkRowProps } from './BookmarkRow.vue';

const list = ref(null);
const { width } = useElementSize(list);
const listWidth = throttledRef(width, 500);
const rowWidth = 100;
const rowsCount = computed(() => listWidth.value / rowWidth);
const listStyle = computed(() => `--rows-count: ${Math.floor(rowsCount.value)}; --row-height: ${rowWidth}px`);
const bookmarks = ref<BookmarkRowProps[]>(Array(12).fill({
  src: 'https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png',
  title: 'sival !!',
} satisfies BookmarkRowProps));
const changeOrder = ({ moved: { oldIndex, newIndex } }: { moved: { [K: string]: number } }) => {
  console.log(oldIndex, newIndex); /* @DELETE  */
//   const isTryToMoveAdder = bookmarks.value.length <= oldIndex;
// //   if (isTryToMoveAdder) {
// //
// //   }
};
</script>
<template>
  <Draggable
    ref="list"
    v-model="bookmarks"
    class="list"
    :style="listStyle"
    :delay="50"
    @change="changeOrder"
  >
    <BookmarkRow
      v-for="row, idx in bookmarks"
      :key="idx"
      v-bind="row"
    />
  </Draggable>
</template>
<style lang="scss" scoped>
.list {
  display: grid;
  padding-top: 15px;
  grid-template-columns: repeat(var(--rows-count), 1fr);
  grid-template-rows: repeat(var(--rows-count), var(--row-height));
  align-items: center;
}
</style>
