<script lang="ts" setup>
import SettingIcon from 'src/components/common/icons/SettingIcon.vue';
import { vSanja, type Options } from 'vue3-effect-directive';
import 'vue3-effect-directive/dist/assets/animations/sanja.css';
import { directive as vTippy } from 'vue-tippy';

const effectOption = { borderRadius: 999 } satisfies Options;
</script>
<template>
  <li
    v-tippy="{ content: 'setting', placement: 'bottom' }"
    v-sanja="effectOption"
    class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer"
  >
    <div
      class="flex gap-2 justify-center items-center"
    >
      <SettingIcon
        style="color: hsl(var(--color-primary), .7)"
        class="w-[22px]"
      />
    </div>
  </li>
</template>
<style lang="scss" scoped>
</style>
