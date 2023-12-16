<script lang="ts" setup>
import I18nIcon from 'src/components/common/icons/I18nIcon.vue';
import USIcon from 'src/components/common/icons/nations/USIcon.vue';
import KRIcon from 'src/components/common/icons/nations/KRIcon.vue';
import { useLocaleStore } from 'src/stores/useLocaleStore';
import { MenuItem } from '@headlessui/vue';
import ButtonTemplate from './ButtonTemplate.vue';

const localeStore = useLocaleStore();
const items = {
  en: {
    icon: USIcon,
    text: 'English',
  },
  ko: {
    icon: KRIcon,
    text: 'Korean',
  },
};
</script>
<template>
  <ButtonTemplate>
    <template #icon>
      <I18nIcon
        style="color: hsl(var(--color-primary), .7)"
        class="w-[22px]"
      />
    </template>
    <template #buttons>
      <MenuItem
        v-for="{ icon, text }, key in items"
        :key="key"
        as="div"
        class="flex items-center gap-4 relative min-w-[120px] px-5 py-2 bg-primary bg-opacity-40 text-[hsl(var(--app-text-color))]"
        :class="localeStore.value === key && 'text-primary font-bold'"
        @click="localeStore.update(key)"
      >
        <component :is="icon" />
        <span>
          {{ text }}
        </span>
      </MenuItem>
    </template>
  </ButtonTemplate>
</template>
<style lang="scss" scoped>
</style>
