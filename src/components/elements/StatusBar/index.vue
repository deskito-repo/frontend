<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { FadeTransition } from '@noction/vue-bezier';
import useLoginModal from 'src/composables/useLoginModal';
import SettingButton from './SettingButton.vue';
import ThemeButton from './ThemeButton.vue';
import I18nButton from './I18nButton.vue';
import WeatherButton from './WeatherButton.vue';

const loginModal = useLoginModal();
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>
<template>
  <div class="h-[50px]">
    <div class="max-w-6xl m-auto">
      <FadeTransition
        :delay="100"
        :duration="1000"
      >
        <div
          v-show="isMounted"
          class="w-full flex justify-between"
        >
          <div class="left">
            <WeatherButton />
          </div>
          <ul
            class="right flex"
          >
            <I18nButton />
            <ThemeButton />
            <SettingButton @click="loginModal.open" />
          </ul>
        </div>
      </FadeTransition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
li {
    @apply px-3 h-[50px] flex justify-center items-center;
}
</style>
