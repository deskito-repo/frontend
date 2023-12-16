<script lang="ts" setup>
import { MenuItems, MenuButton, Menu } from '@headlessui/vue';
import { SlideYDownTransition as MenuTransition } from '@noction/vue-bezier';

</script>
<template>
  <Menu
    as="div"
    class="relative"
  >
    <MenuButton class="flex gap-2 px-4 justify-center items-center h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer">
      <slot name="icon"></slot>
    </MenuButton>
    <MenuTransition>
      <MenuItems
        class="cursor-pointer absolute z-[1] right-0 bg-[hsla(var(--app-bg-color))] rounded-md shadow-md overflow-hidden flex flex-col"
      >
        <slot name="buttons"></slot>
      </MenuItems>
    </MenuTransition>
  </Menu>
</template>
<style lang="scss" scoped>
</style>
