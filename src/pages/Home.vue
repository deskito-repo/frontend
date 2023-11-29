<script lang="ts" setup>
import SearchBar from 'src/components/SearchBar/SearchBar.vue';
import SearchCircleBar from 'src/components/SearchBar/SearchCircleBar.vue';
import { useDeviceSize } from 'src/composables/useDeviceSize';
import { onMounted, ref } from 'vue';

const { isMobile } = useDeviceSize();
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
      </div>
    </div>
    <div class="bottom-side">
      <SearchCircleBar
        v-if="isMobile"
        @click="searchInputElement?.focus()"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bottom-side {
  @apply fixed left-0 right-0 bottom-0 py-5 flex justify-center items-center pointer-events-none;
  * {
    @apply pointer-events-auto;
  }
}
</style>
