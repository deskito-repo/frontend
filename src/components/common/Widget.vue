<!-- widget template -->
<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>
<template>
  <div class="w-full p-4 bg-white rounded-md ring-1 ring-black/10">
    <div
      v-if="title"
      class="text-xl font-bold mb-4"
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
