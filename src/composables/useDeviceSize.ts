import { throttledRef, useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

export const useDeviceSize = () => {
  const windowSize = useWindowSize();
  const width = throttledRef(windowSize.width, 500);
  const isDesktop = computed(() => width.value >= 768);
  const isMobile = computed(() => width.value <= 500);
  return {
    width,
    isDesktop,
    isMobile,
  };
};
