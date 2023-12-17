<script lang="ts" setup>
import { MenuItems, MenuButton, Menu } from '@headlessui/vue';
import { vSanja } from 'vue3-effect-directive';
</script>
<template>
  <Menu
    v-sanja
    as="div"
    class="relative"
  >
    <MenuButton class="flex gap-2 px-4 justify-center items-center h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer">
      <slot name="icon"></slot>
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="cursor-pointer absolute z-[1] right-0 bg-[hsla(var(--app-bg-color))] rounded-md shadow-md overflow-hidden flex flex-col"
      >
        <slot name="buttons"></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
<style lang="scss" scoped>
</style>
