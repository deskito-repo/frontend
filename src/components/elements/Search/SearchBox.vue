<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue';
import { HistoryTrap } from 'src/utils/HistoryTrap';
import { useSearchStore } from 'src/stores/useSearchStore';
import { storeToRefs } from 'pinia';
import SearchBar from './SearchBar.vue';
import SuggestionList from '../Suggestion/SuggestionList.vue';

const isShow = defineModel<boolean>('show');
const { searchText } = storeToRefs(useSearchStore());
const searchInputElement = ref<HTMLInputElement>();
let historyTrap: HistoryTrap;
watch(isShow, (show) => {
  if (!show) {
    return;
  }
  historyTrap = new HistoryTrap('searchbox');
  historyTrap.onCatch(() => { isShow.value = false; });
  nextTick(() => searchInputElement.value?.focus());
});
</script>
<template>
  <div
    v-show="isShow"
    class="fixed inset-0 bg-[hsl(var(--app-bg-color))] flex flex-col"
  >
    <SearchBar
      v-model:inputElement="searchInputElement"
      v-model="searchText"
      class="rounded-none"
    />
    <div class="overflow-y-auto h-full bg-primary bg-opacity-20 flex-1">
      <SuggestionList v-if="isShow" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
