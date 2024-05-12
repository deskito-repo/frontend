<script lang="ts" setup>
import StatusBar from 'src/components/elements/StatusBar/index.vue';
import Dock from 'src/components/elements/Dock/Dock.vue';
import { env } from 'src/config';
import Header from './Header.vue';
import Widgets from './Widgets.vue';
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
      <Widgets v-if="env === 'dev'" />
    </div>
    <Dock v-if="env === 'dev'" />
  </div>
</template>
<style lang="scss" scoped>
</style>
