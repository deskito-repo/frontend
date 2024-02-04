<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import CalculateIcon from 'src/components/common/icons/CalculateIcon.vue';
import TextIcon from 'src/components/common/icons/TextIcon.vue';
import { useSearchStore } from 'src/stores/useSearchStore';
import { useSuggestionStore } from 'src/stores/useSuggestionStore';
import { useMagicKeys, whenever } from '@vueuse/core';
import { ref } from 'vue';

const listRef = ref<HTMLLIElement[]>([]);
const searchStore = useSearchStore();
const { list } = storeToRefs(useSuggestionStore());

const { arrowdown, arrowup } = useMagicKeys();
const cursor = ref<null | number>(null);
const cursorManager = {
  move(isUp: boolean) {
    cursor.value = cursor.value === null ? 0 : cursor.value + (isUp ? 1 : -1);
    if (cursor.value === null) {
      return;
    }
    listRef.value.at(cursor.value)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },
  up() { cursorManager.move(true); },
  down() { cursorManager.move(false); },
};
whenever(
  () => searchStore.searchText,
  () => cursor.value = null,
);
whenever(arrowdown, cursorManager.up);
whenever(arrowup, cursorManager.down);
</script>
<template>
  <div class="bg-primary bg-opacity-20">
    <ul
      v-show="list.length"
      class="py-2 text-primary"
    >
      <li
        v-for="{ type, text }, key in list"
        ref="listRef"
        :key="key"
        :class="key === cursor && 'selected'"
        class="px-4 h-[50px] leading-[50px] transition-all duration-100 hover:bg-primary/10 opacity-70 ease-out hover:opacity-100 cursor-pointer"
        @click="searchStore.search(text)"
      >
        <div
          v-if="type === 'calculation'"
          class="row text-blue-500"
        >
          <CalculateIcon />
          <span class="text">
            = {{ text }}
          </span>
        </div>
        <div
          v-else-if="type==='suggestion'"
          class="row"
        >
          <TextIcon class="w-[24px]" />
          <span class="text">
            {{ text }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.row {
    @apply flex items-center gap-4;
}
.text {
  @apply text-ellipsis whitespace-nowrap overflow-hidden flex-1;
}
.selected {
  @apply bg-primary/10 opacity-100;
}
</style>
