<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';
import { useLocaleStore } from './stores/useLocaleStore';

useLocaleStore();
</script>
<template>
  <RouterView
    page
  />
  <ModalsContainer />
</template>
