<script lang="ts" setup>
import { ref, watch } from 'vue';
import { HistoryTrap } from 'src/utils/HistoryTrap';
import SearchBar from './SearchBar.vue';
import SearchList from './SearchList.vue';

const isShow = defineModel<boolean>('show');
const searchText = ref('');
let historyTrap: HistoryTrap;
watch(isShow, (show) => {
  if (!show) {
    return;
  }
  historyTrap = new HistoryTrap('searchbox');
  historyTrap.onCatch(() => { isShow.value = false; });
});
</script>
<template>
  <div
    v-show="isShow"
    class="fixed inset-0 bg-white flex flex-col"
  >
    <SearchBar
      v-model="searchText"
      class="rounded-none"
    />
    <div class="overflow-y-auto h-full">
      <SearchList v-if="isShow" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
