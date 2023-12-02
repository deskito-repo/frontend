<script lang="ts" setup>
import { useTextCalculator } from 'src/composables/useTextCalculator';
import { useSearchStore } from 'src/stores/useSearchStore';
import { useSuggestionStore } from 'src/stores/useSuggestionStore';
import { computed } from 'vue';

interface Suggestion {
    type: 'suggestion' | 'calculation';
    text: string;
}
const suggestionStore = useSuggestionStore();
const searchStore = useSearchStore();
const { calculate } = useTextCalculator();
const list = computed(() => {
  let list: Suggestion[] = [];

  const calculation = calculate(searchStore.searchText);
  if (calculation) {
    list.push({
      type: 'calculation',
      text: calculation,
    });
  }

  const suggestions = suggestionStore.value
    .filter((_, idx) => idx <= 50)
    .map((text): Suggestion => ({
      type: 'suggestion',
      text,
    }));
  list = [...list, ...suggestions];

  return list;
});
</script>
<template>
  <div>
    <Transition>
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
          <span
            v-if="type === 'calculation'"
            class="text-blue-500"
          >
            = {{ text }}
          </span>
          <div v-else-if="type==='suggestion'">
            {{ text }}
          </div>
        </li>
      </ul>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
</style>
