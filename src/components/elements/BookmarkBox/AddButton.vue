<script lang="ts" setup>
import useBookmarkGridFormModal from 'src/composables/useBookmarkGridFormModal';
import { vSanja as vEffect } from 'vue3-effect-directive';

const modal = useBookmarkGridFormModal();
</script>
<template>
  <div
    v-effect="{ borderRadius: 999 }"
    class="flex justify-center items-center w-10 h-10 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
    @click="modal.open"
  >
    <Icon
      icon="material-symbols:add-rounded"
      width="24"
    />
  </div>
</template>
<style lang="scss" scoped>
</style>
