<script lang="ts" setup>
import { useFocus } from '@vueuse/core';
import SearchBar from 'src/components/Search/SearchBar.vue';
import SearchBox from 'src/components/Search/SearchBox.vue';
import SearchCircleBar from 'src/components/Search/SearchCircleBar.vue';
import { useDeviceSize } from 'src/composables/useDeviceSize';
import { watch, onMounted, ref } from 'vue';

const { isMobile } = useDeviceSize();
const searchText = ref('');
const searchInputElement = ref<HTMLInputElement>();
const { focused: focusedOnSearchInput } = useFocus(searchInputElement);
const isShowSearchBox = ref(false);
watch(focusedOnSearchInput, (isFocused) => {
  if (!isFocused) {
    return;
  }
  isShowSearchBox.value = true;
});

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
    <div v-if="isMobile">
      <div class="bottom-side">
        <SearchCircleBar
          v-if="!focusedOnSearchInput"
          @click="searchInputElement?.focus()"
        />
      </div>
      <SearchBox
        v-model:show="isShowSearchBox"
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
