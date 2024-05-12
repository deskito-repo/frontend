<script lang="ts" setup>
const items = [{
  title: 'kakao',
  icon: 'ri:kakao-talk-fill',
}, {
  title: 'folder',
  icon: 'material-symbols-light:folder-rounded',
}, {
  title: 'browserstack',
  icon: 'logos:browserstack',
}];
</script>
<template>
  <div class="flex gap-2 px-2">
    <div
      v-for="item, key in items"
      :key="key"
      class="item"
    >
      <Icon
        v-bind="item"
        class="w-full h-full"
      />
      <div class="absolute inset-0 rounded-full hover:bg-primary hover:bg-opacity-10 hover:blur-md"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item {
  width: 3rem;
  @apply relative p-2 cursor-pointer hover:scale-150 transition-all ease-in-out
}
</style>
