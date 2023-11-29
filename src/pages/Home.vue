<script lang="ts" setup>
import SearchBar from 'src/components/SearchBar/SearchBar.vue';
import SearchHistoryBox from 'src/components/SearchHistoryBox/SearchHistoryBox.vue';
import { onMounted, ref } from 'vue';

const searchText = ref('');
const searchInputElement = ref<HTMLInputElement>();
onMounted(() => {
  searchInputElement.value?.focus();
});
</script>
<template>
  <div class="bg-slate-100">
    <div class="px-5">
      <div class="py-10">
        <SearchBar
          v-model:inputElement="searchInputElement"
          v-model="searchText"
          class="m-auto"
        />
        <SearchHistoryBox />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
