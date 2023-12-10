<script lang="ts" setup>
import {
  NButton, ButtonProps, NConfigProvider, GlobalThemeOverrides,
} from 'naive-ui';

defineProps<{
    attrs?: ButtonProps
}>();

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
const themeOverrides: ButtonThemeOverrides = {
  heightMedium: '40px',
};
const globalOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'hsla(var(--color-primary), 50%)',
  },
};
// eslint-disable-next-line no-underscore-dangle
const _globalOverrides = globalOverrides as any;
</script>
<template>
  <NConfigProvider :theme="_globalOverrides">
    <NButton
      class="w-full rounded-md"
      v-bind="{
        ...attrs,
        type: 'primary',
        themeOverrides
      }"
    >
      <slot></slot>
    </NButton>
  </NConfigProvider>
</template>
<style lang="scss" scoped>
</style>
