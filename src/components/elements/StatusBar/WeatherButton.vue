<script lang="ts" setup>
import useWeatherStore from 'src/stores/useWeatherStore';
import CloudIcon from 'src/components/common/icons/CloudIcon.vue';

const { getWeatherStatusInPlace } = useWeatherStore();
</script>
<template>
  <li class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer">
    <div
      class="flex gap-2 justify-center items-center"
      @click="getWeatherStatusInPlace"
    >
      <CloudIcon class="w-[24px]" />
      <div class="text-xs text-slate-500">
        16 °
      </div>
    </div>
  </li>
</template>
<style lang="scss" scoped>
</style>
