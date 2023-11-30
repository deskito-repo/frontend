<script lang="ts" setup>
import CloudIcon from './common/icons/CloudIcon.vue';

</script>
<template>
  <div class="h-[50px]">
    <div class="max-w-6xl m-auto flex justify-between">
      <div class="left">
      </div>
      <ul class="right">
        <li class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer">
          <div class="flex gap-2 justify-center items-center">
            <CloudIcon class="w-[24px]" />
            <div class="text-xs text-slate-500">
              16 °
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
li {
    @apply px-3 h-[50px] flex justify-center items-center;
}
</style>
