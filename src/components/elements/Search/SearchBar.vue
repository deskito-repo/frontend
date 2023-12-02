<script lang="ts" setup>
import { VueSpinnerTail } from 'vue3-spinners';
import { useSearchStore } from 'src/stores/useSearchStore';
import { useI18n } from 'vue-i18n';
import { useSuggestionStore } from 'src/stores/useSuggestionStore';
import { watchDebounced } from '@vueuse/core';

const { t } = useI18n();
const { search } = useSearchStore();
const suggestionStore = useSuggestionStore();
const text = defineModel<string>({ required: true });
const submit = () => search(text.value);
const inputElement = defineModel<HTMLInputElement>('inputElement');
watchDebounced(() => text.value, (text) => text && suggestionStore.requestSuggest(text), { debounce: 200 });
</script>
<template>
  <form
    class="max-w-xl h-[60px] relative shadow-md rounded-2xl ring-1 ring-[#dedede7c] overflow-hidden bg-white"
    @submit.prevent="submit"
  >
    <input
      ref="inputElement"
      v-model="text"
      :maxlength="250"
      class="w-full h-full px-5 outline-none placeholder:text-black/20"
      :placeholder="t('press_input')"
    >

    <div class="absolute right-0 top-0 bottom-0 flex pointer-events-none">
      <div
        :class="text.length === 0 ? 'opacity-0' : 'opacity-20'"
        class="input-element w-[30px]"
      >
        <VueSpinnerTail
          :size="25"
        />
      </div>
      <div
        :class="text.length === 0 ? 'scale-90 opacity-10' : 'scale-105 opacity-70'"
        class="input-element w-[50px] pointer-events-auto"
        @click="text = ''"
      >
        <span class="cursor-pointer">
          &#x2716;
        </span>
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.input-element {
    @apply h-full flex items-center justify-center text-black transition-all ease-out
}
</style>