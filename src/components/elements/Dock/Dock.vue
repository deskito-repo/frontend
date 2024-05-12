<script lang="ts" setup>
import ItemContainer from './ItemContainer.vue';
</script>
<template>
  <div class="fixed left-0 right-0 bottom-4 flex justify-center">
    <div class="body">
      <ItemContainer />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.body {
  min-width: calc(3rem * 3);
  max-width: calc(3rem * 6);
  @apply bg-background text-primary shadow-md bg-opacity-40 rounded-lg ring-1 ring-text ring-opacity-[.02] backdrop-blur
}
</style>
