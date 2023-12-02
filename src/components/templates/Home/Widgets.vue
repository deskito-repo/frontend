<script lang="ts" setup>
import NewsWidget from 'src/components/elements/Widgets/NewsWidget.vue';

</script>
<template>
  <div class="px-5">
    <div class="widget-container max-w-md">
      <NewsWidget />
      <NewsWidget />
    </div>
    <div class="article"></div>
  </div>
</template>
<style lang="scss" scoped>
.widget-container {
  @apply flex flex-col gap-4
}
</style>
