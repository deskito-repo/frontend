<script lang="ts" setup>
import SettingIcon from 'src/components/common/icons/SettingIcon.vue';
</script>
<template>
  <li class="px-3 h-[50px] leading-[50px] opacity-60 hover:opacity-100 transition-all cursor-pointer">
    <div
      class="flex gap-2 justify-center items-center"
    >
      <SettingIcon
        style="color: hsl(var(--text-color), .7)"
        class="w-[22px]"
      />
    </div>
  </li>
</template>
<style lang="scss" scoped>
</style>
