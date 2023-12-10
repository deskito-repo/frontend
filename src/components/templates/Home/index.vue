<script lang="ts" setup>
import StatusBar from 'src/components/elements/StatusBar/index.vue';
import Header from './Header.vue';
// import Widgets from './Widgets.vue';
</script>
<template>
  <div
    style="
      overflow-y: auto;
      background-color: hsla(var(--color-primary), .1)
    "
  >
    <div class="max-w-7xl m-auto">
      <StatusBar />
      <div class="mb-10">
        <Header />
      </div>
      <!-- <Widgets /> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
