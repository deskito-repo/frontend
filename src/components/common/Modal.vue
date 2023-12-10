<script setup lang="ts">
import { SlideYUpTransition as ModalTransition } from '@noction/vue-bezier';
import { delay } from 'src/utils/delay';
import { onMounted, ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';

defineProps<{
  title?: string
}>();
const isMounted = ref(false);
onMounted(async () => {
  await delay(0);
  isMounted.value = true;
});
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <ModalTransition :duration="300">
      <div class="px-5 max-w-full">
        <div
          v-show="isMounted"
          class="board"
        >
          <div class="p-5 bg-primary bg-opacity-20">
            <div
              v-if="title"
              class="text-xl text-primary font-bold mb-5"
            >
              {{ title }}
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
    </ModalTransition>
  </VueFinalModal>
</template>

<style>
.board {
  @apply bg-white rounded-2xl shadow-md;
}
.content {
  @apply max-w-full;
}
</style>
