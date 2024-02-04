<script lang="ts" setup>
import useWeatherStore from 'src/stores/useWeatherStore';
import { computed } from 'vue';
import { VueSpinnerTail } from 'vue3-spinners';
import { FadeTransition } from '@noction/vue-bezier';

const weatherStore = useWeatherStore();
weatherStore.getWeatherStatusInPlace();
const icon = computed(() => {
  switch (weatherStore.value?.weather) {
  case 'clouds':
    return 'ic:sharp-wb-cloudy';
  case 'rain':
    return 'material-symbols-light:rainy-light';
  case 'snow':
    return 'noto-v1:cloud-with-snow';
  case 'thunderstorm':
    return 'ant-design:thunderbolt-filled';
  case 'drizzle':
    return 'simple-icons:drizzle';
  case 'clear':
  default:
    return 'line-md:sunny-filled-loop';
  }
});
</script>
<template>
  <div
    class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer flex justify-center items-center"
  >
    <div class="w-20 flex justify-center items-center">
      <FadeTransition>
        <div
          v-if="weatherStore.value"
          class="flex gap-2 justify-center items-center"
        >
          <Icon
            width="24"
            v-bind="{ icon }"
          />
          <div
            class="text-sm text-text"
          >
            {{ weatherStore.value?.degree }}°C
          </div>
        </div>
      </FadeTransition>
      <VueSpinnerTail v-if="!weatherStore.value" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
