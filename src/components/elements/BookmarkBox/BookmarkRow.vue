<script lang="ts" setup>
export type Props = {
  src: string;
  title: string;
};
defineProps<Props>();
</script>
<template>
  <div class="hover:bg-text hover:bg-opacity-5 transition-colors cursor-pointer p-2 rounded-md">
    <div class="flex flex-col items-center gap-1">
      <img
        v-bind="{ src }"
        class="w-14"
      >
      <div>
        <span class="text-sm">{{ title }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
