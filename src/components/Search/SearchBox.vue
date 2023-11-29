<script lang="ts" setup>
import { ref } from 'vue';
import SearchBar from './SearchBar.vue';
import SearchList from './SearchList.vue';

const isShow = defineModel<boolean>('show');
const searchText = ref('');
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
