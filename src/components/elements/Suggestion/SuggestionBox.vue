<script lang="ts" setup>
import SuggestionList from './SuggestionList.vue';

</script>
<template>
  <div class="max-w-xl m-auto relative">
    <div
      class="w-full absolute top-4 rounded-xl shadow-xl overflow-hidden"
    >
      <SuggestionList class="max-h-[500px] overflow-y-auto" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
