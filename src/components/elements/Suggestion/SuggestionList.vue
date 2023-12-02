<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import CalculateIcon from 'src/components/common/icons/CalculateIcon.vue';
import TextIcon from 'src/components/common/icons/TextIcon.vue';
import { useSearchStore } from 'src/stores/useSearchStore';
import { useSuggestionStore } from 'src/stores/useSuggestionStore';

const searchStore = useSearchStore();
const { list } = storeToRefs(useSuggestionStore());
</script>
<template>
  <div>
    <ul
      v-show="list.length"
      class="py-2 bg-white"
    >
      <li
        v-for="{ type, text }, key in list"
        :key="key"
        class="px-4 h-[50px] leading-[50px] transition-all duration-100 hover:bg-black/5 opacity-70 ease-out hover:opacity-100 cursor-pointer"
        @click="searchStore.search(text)"
      >
        <div
          v-if="type === 'calculation'"
          class="row text-blue-500"
        >
          <CalculateIcon />
          <span>
            = {{ text }}
          </span>
        </div>
        <div
          v-else-if="type==='suggestion'"
          class="row"
        >
          <TextIcon class="w-[24px]" />
          <span>
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
</style>
