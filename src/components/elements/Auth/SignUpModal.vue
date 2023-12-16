<script lang="ts" setup>
import Modal from 'src/components/common/Modal.vue';
import Form from './SignUpForm.vue';

</script>
<template>
  <Modal :title="$t('general.signup')">
    <Form />
  </Modal>
</template>
<style lang="scss" scoped>
</style>
