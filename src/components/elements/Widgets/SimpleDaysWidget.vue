<script lang="ts" setup>
const today = new Date().getDay() - 1;
</script>
<template>
  <div class="m-auto flex justify-center">
    <div class="flex gap-2">
      <div
        v-for="_, i in 7"
        :key="i"
        class="square"
        :class="[
          today === i ? 'opacity-100' : 'opacity-40',
          i > 4 ? 'bg-secondary' : 'bg-primary'
        ]"
      ></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.square {
    @apply w-2 h-2 rounded-sm
}
</style>
