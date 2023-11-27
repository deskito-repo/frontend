<script lang="ts" setup>
import { VueSpinnerTail } from 'vue3-spinners';

const text = defineModel<string>({ required: true });
const submit = () => {
  console.log('z'); /* @DELETE  */
};
</script>
<template>
  <form
    class="max-w-xl h-[60px] relative shadow-md rounded-2xl ring-1 ring-[#dedede7c] overflow-hidden bg-white"
    @submit.prevent="submit"
  >
    <input
      v-model="text"
      :maxlength="250"
      class="w-full h-full px-5 outline-none placeholder:text-black/20"
      placeholder="검색어를 입력해주세요"
    >
    <div class="absolute right-0 top-0 bottom-0 flex">
      <div
        :class="text.length === 0 ? 'opacity-0' : 'opacity-20'"
        class="input-element"
      >
        <VueSpinnerTail :size="30" />
      </div>
      <div
        :class="text.length === 0 ? 'scale-90 text-opacity-10' : 'scale-105 text-opacity-70'"
        class="input-element"
        @click="text = ''"
      >
        &#x2716;
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.input-element {
    @apply w-[50px] h-full flex items-center justify-center text-black transition-all ease-out
}
</style>
