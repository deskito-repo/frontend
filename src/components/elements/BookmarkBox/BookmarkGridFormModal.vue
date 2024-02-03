<script lang="ts" setup>
import Modal from 'src/components/common/Modal.vue';
import { reactive } from 'vue';
import Form, { type Props } from './BookmarkGridForm.vue';

const form = reactive<Props>({
  src: '',
  title: '',
});
</script>
<template>
  <Modal>
    <Form v-model="form" />
  </Modal>
</template>
<style lang="scss" scoped>
</style>
