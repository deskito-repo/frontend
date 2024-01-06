<script lang="ts" setup>
defineProps<{
    items: {
        title: string;
    }[]
}>();
</script>
<template>
  <div :class="$style.host">
    <slot></slot>
  </div>
</template>
<style module>
.host {
    @apply max-w-xl:left-0 max-w-xl:right-0
}
</style>
