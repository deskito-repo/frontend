<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { FadeTransition } from '@noction/vue-bezier';
import WeatherButton from './WeatherButton.vue';
import SettingButton from './SettingButton.vue';

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>
<template>
  <div class="h-[50px]">
    <div class="max-w-6xl m-auto flex justify-between">
      <div class="left">
      </div>
      <FadeTransition
        :delay="500"
        :duration="1000"
      >
        <ul
          v-show="isMounted"
          class="right flex"
        >
          <WeatherButton />
          <SettingButton />
        </ul>
      </FadeTransition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
li {
    @apply px-3 h-[50px] flex justify-center items-center;
}
</style>
