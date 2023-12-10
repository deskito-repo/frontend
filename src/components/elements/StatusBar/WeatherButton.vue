<script lang="ts" setup>
import useWeatherStore from 'src/stores/useWeatherStore';
import CloudIcon from 'src/components/common/icons/CloudIcon.vue';

const { getWeatherStatusInPlace } = useWeatherStore();
</script>
<template>
  <div class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer flex justify-center items-center">
    <div
      class="flex gap-2 justify-center items-center"
      @click="getWeatherStatusInPlace"
    >
      <CloudIcon class="w-[24px]" />
      <div class="text-xs text-slate-500">
        16 °
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
