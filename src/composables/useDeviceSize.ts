import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

export const useDeviceSize = () => {
  const { width } = useWindowSize();
  const isDesktop = computed(() => width.value >= 768);
  const isMobile = computed(() => width.value <= 500);
  return {
    isDesktop,
    isMobile,
  };
};
