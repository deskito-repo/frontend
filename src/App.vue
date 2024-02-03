<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
import { type TippyOptions, setDefaultProps } from 'vue-tippy';
import { useLocaleStore } from './stores/useLocaleStore';
import { useDeviceSize } from './composables/useDeviceSize';

const device = useDeviceSize();
setDefaultProps({
  duration: 100,
  animation: 'scale-subtle',
  theme: 'translucent',
  trigger: device.isDesktop.value ? 'mouseenter' : 'contextmenu',
  arrow: false,
} satisfies TippyOptions);
useLocaleStore();
</script>
<template>
  <RouterView page />
  <ModalsContainer />
</template>
