<!--
    검색창에 글자를 입력했을 경우,
    이와 관련한 리스트들을 보여준다.
-->
<script lang="ts" setup>
import { SearchResultRow } from 'src/types/SearchResultRow';
import { ref } from 'vue';

const list = ref<SearchResultRow[]>(
  new Array(25).fill({ type: 'history' } satisfies SearchResultRow),
);
</script>
<template>
  <ul
    class="h-[55px] leading-[55px] px-3"
  >
    <li
      v-for="{ type }, idx in list"
      :key="idx"
    >
      {{ type }}
    </li>
  </ul>
</template>
<style lang="scss" scoped>
</style>
