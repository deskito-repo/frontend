<script lang="ts" setup>
import useWeatherStore from 'src/stores/useWeatherStore';
import { computed } from 'vue';

const weatherStore = useWeatherStore();
weatherStore.getWeatherStatusInPlace();
const icon = computed(() => {
  switch (weatherStore.value?.weather) {
  case 'cloud':
    return 'ic:sharp-wb-cloudy';
  case 'rain':
    return 'material-symbols-light:rainy-light';
  case 'snow':
    return 'noto-v1:cloud-with-snow';
  default:
    return '';
  }
});
</script>
<template>
  <div
    class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer flex justify-center items-center"
  >
    <div
      v-if="weatherStore.value"
      class="flex gap-2 justify-center items-center"
    >
      <Icon
        width="24"
        v-bind="{ icon }"
      />
      <div
        class="text-sm text-slate-500"
      >
        {{ weatherStore.value?.degree }}°C
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
