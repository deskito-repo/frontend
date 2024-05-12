<script lang="ts" setup>
import useWeatherStore from 'src/stores/useWeatherStore';
import { computed } from 'vue';
import { VueSpinnerTail } from 'vue3-spinners';
import { FadeTransition } from '@noction/vue-bezier';
import { directive as vTippy } from 'vue-tippy';
import { useI18n } from 'vue-i18n';

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
const status = computed<'fulfilled' | 'loading'>(() => {
  if (weatherStore.value) {
    return 'fulfilled';
  }
  return 'loading';
});
const { t } = useI18n();
const tippyOption = !weatherStore.isGeolocationGranted && {
  content: t('need_browser_permission'),
  placement: 'bottom',
  trigger: 'mouseenter',
};
</script>
<template>
  <div
    v-tippy="tippyOption"
    class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer flex justify-center items-center"
  >
    <div class="w-20 flex justify-center items-center">
      <FadeTransition>
        <div
          v-if="status === 'fulfilled'"
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
      <VueSpinnerTail v-if="status === 'loading'" />
      <FadeTransition>
        <div
          v-if="!weatherStore.isGeolocationGranted"
          class="inset absolute opacity-50 text-red-300"
        >
          <Icon
            icon="material-symbols:lock"
          />
        </div>
      </FadeTransition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
