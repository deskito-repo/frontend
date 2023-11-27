<script lang="ts" setup>
import SearchBar from 'src/components/SearchBar/SearchBar.vue';
import { ref } from 'vue';

const searchText = ref('');
const searchBar = ref<typeof SearchBar>();
</script>
<template>
  <div class="bg-slate-100">
    <div class="py-10">
      {{ searchBar?.__defaults }}
      <SearchBar
        ref="searchBar"
        v-model="searchText"
        class="m-auto"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
