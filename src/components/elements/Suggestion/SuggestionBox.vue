<script lang="ts" setup>
import { useSuggestionStore } from 'src/stores/useSuggestionStore';
import { storeToRefs } from 'pinia';
import { SlideYUpTransition } from '@noction/vue-bezier';
import SuggestionList from './SuggestionList.vue';

const { list } = storeToRefs(useSuggestionStore());
</script>
<template>
  <div class="max-w-xl m-auto relative">
    <SlideYUpTransition
      duration="100"
    >
      <div
        v-show="list.length"
        class="w-full absolute top-4 rounded-xl shadow-xl overflow-hidden"
      >
        <SuggestionList
          class="max-h-[500px] overflow-y-auto"
        />
      </div>
    </SlideYUpTransition>
  </div>
</template>
<style lang="scss" scoped>
</style>
