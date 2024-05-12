<!-- widget template -->
<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>
<template>
  <div class="w-full p-4 bg-opacity-20 rounded-xl text-text bg-background shadow-md">
    <div
      v-if="title"
      class="text-sm font-bold mb-2"
    >
      {{ title }}
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
