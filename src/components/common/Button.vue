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
  textColor: 'hsl(--color-primary)',
  color: 'hsl(--color-primary)',
  border: 'hsl(--color-primary)',
  colorPrimary: 'hsl(--color-primary)',
};
const globalOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'hsl(var(--color-primary))',
    borderColor: 'black',
  },
};
</script>
<template>
  <NConfigProvider :theme="globalOverrides as any">
    <NButton
      class="w-full"
      v-bind="{
        ...attrs,
        themeOverrides
      }"
    >
      <slot></slot>
    </NButton>
  </NConfigProvider>
</template>
<style lang="scss" scoped>
</style>
