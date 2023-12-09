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
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <ModalTransition :duration="300">
      <div
        v-show="isMounted"
        class="board"
      >
        <div class="p-5 bg-primary bg-opacity-20">
          <div
            v-if="title"
            class="text-xl text-primary font-bold mb-4"
          >
            {{ title }}
          </div>
          <slot></slot>
        </div>
      </div>
    </ModalTransition>
  </VueFinalModal>
</template>

<style>
.board {
    @apply bg-white rounded-md shadow-md;
}
</style>
