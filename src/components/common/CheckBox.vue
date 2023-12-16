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
<style lang="scss">
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: hsl(var(--color-primary));
  border-color: hsl(var(--color-primary));
}
.el-checkbox__input.is-checked .el-checkbox__inner::after {
  border-color: hsl(var(--color-secondary));
}
</style>
