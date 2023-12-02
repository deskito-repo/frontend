<script lang="ts" setup>
import WeatherButton from './WeatherButton.vue';
import SettingButton from './SettingButton.vue';
</script>
<template>
  <div class="h-[50px]">
    <div class="max-w-6xl m-auto flex justify-between">
      <div class="left">
      </div>
      <ul class="right flex">
        <WeatherButton />
        <SettingButton />
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
li {
    @apply px-3 h-[50px] flex justify-center items-center;
}
</style>
