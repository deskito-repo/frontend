<script lang="ts" setup>
import useBookmarkEditModal from 'src/composables/useBookmarkEditModal';

const modal = useBookmarkEditModal();
</script>
<template>
  <div class="flex justify-between">
    <div></div>
    <div>
      <div
        class="p-2 text-text text-opacity-20 hover:text-opacity-100 hover:bg-text hover:bg-opacity-5 active:bg-opacity-20 transition-all cursor-pointer rounded-md"
        @click="modal.open"
      >
        <Icon
          width="28"
          icon="material-symbols:add"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
