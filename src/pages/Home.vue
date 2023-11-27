<script lang="ts" setup>
import SearchBar from 'src/components/SearchBar/SearchBar.vue';
import { ref } from 'vue';

const searchText = ref('');
</script>
<template>
  <div class="bg-slate-100">
    <div class="px-5">
      <div class="py-10">
        <SearchBar
          v-model="searchText"
          class="m-auto"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
