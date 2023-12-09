<script lang="ts" setup>
import { ElCheckbox, CheckboxProps } from 'element-plus';
import 'element-plus/es/components/checkbox/style/css';

defineProps<{
    attrs?: CheckboxProps
}>();
</script>
<template>
  <ElCheckbox v-bind="attrs">
    <span class="text-primary text-opacity-70"><slot></slot></span>
  </ElCheckbox>
</template>
<style lang="scss" scoped>
</style>
