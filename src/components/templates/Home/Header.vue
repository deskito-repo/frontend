<script lang="ts" setup>
import { useFocus } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import SearchBar from 'src/components/elements/Search/SearchBar.vue';
import SearchBox from 'src/components/elements/Search/SearchBox.vue';
import SearchCircleBar from 'src/components/elements/Search/SearchCircleBar.vue';
import SuggestionBox from 'src/components/elements/Suggestion/SuggestionBox.vue';
import SquareClockWidget from 'src/components/elements/Widgets/SquareClockWidget.vue';
import { useDeviceSize } from 'src/composables/useDeviceSize';
import { useSearchStore } from 'src/stores/useSearchStore';
import { watch, onMounted, ref } from 'vue';

const { isDesktop, isMobile } = useDeviceSize();
const { searchText } = storeToRefs(useSearchStore());
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
  if (!isDesktop.value) {
    return;
  }
  searchInputElement.value?.focus();
});
</script>
<template>
  <div class="px-5">
    <SquareClockWidget />
    <div class="py-4">
      <SearchBar
        v-model:inputElement="searchInputElement"
        v-model="searchText"
        class="m-auto"
      />
      <SuggestionBox v-if="isDesktop" />
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
  <div>
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
