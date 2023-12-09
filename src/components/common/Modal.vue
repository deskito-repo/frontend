<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

defineProps<{
  title?: string
}>();
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="board">
      <slot></slot>
    </div>
  </VueFinalModal>
</template>

<style>
.board {
    @apply bg-white p-4 rounded-md shadow-md;
}
</style>
