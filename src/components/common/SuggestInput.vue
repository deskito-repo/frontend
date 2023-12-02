<!--
    text 두 개를 동시에 노출시키는 input
-->
<script lang="ts" setup>

type Props = {
    secondText?: string;
}
defineProps<Props>();
const text = defineModel<string>();
</script>
<template>
  <div class="inline">
    <input
      v-bind="$attrs"
      :value="secondText"
    >
    <input
      v-bind="$attrs"
      v-model="text"
    >
  </div>
</template>
<style lang="scss" scoped>
input {
    @apply absolute;
}
</style>
