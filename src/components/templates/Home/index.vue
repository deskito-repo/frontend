<script lang="ts" setup>
import Header from './Header.vue';
import Widgets from './Widgets.vue';
</script>
<template>
  <div
    class="bg-slate-100"
    style="overflow-y: auto"
  >
    <div class="max-w-7xl m-auto">
      <div class="mb-10">
        <Header />
      </div>
      <Widgets />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
