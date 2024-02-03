<script lang="ts" setup>
import ThemeIcon from 'src/components/common/icons/ThemeIcon.vue';
import { MenuItem } from '@headlessui/vue';
import { useThemeStore } from 'src/stores/useThemeStore';
import { storeToRefs } from 'pinia';
import ButtonTemplate from './ButtonTemplate.vue';

const themeStore = useThemeStore();
const { currentTheme, themes } = storeToRefs(themeStore);
</script>
<template>
  <ButtonTemplate :tippy="{ content: 'theme', placement: 'bottom' }">
    <template #icon>
      <ThemeIcon
        style="color: hsl(var(--color-primary), .7)"
        class="w-[22px]"
      />
    </template>
    <template #buttons>
      <MenuItem
        v-for="{ color }, itemTheme in themes"
        :key="itemTheme"
        as="div"
        class="flex items-center gap-4 relative min-w-[120px] px-5 py-2 bg-primary bg-opacity-40 text-[hsl(var(--app-text-color))]"
        :class="currentTheme === itemTheme && 'text-primary font-bold'"
        @click="themeStore.set(itemTheme)"
      >
        <div
          :style="{ background: color }"
          class="w-[25px] h-[25px] border-gray-600 border-[3px] rounded-full"
        ></div>
        {{ itemTheme }}
      </MenuItem>
    </template>
  </ButtonTemplate>
</template>
<style lang="scss" scoped>
</style>
