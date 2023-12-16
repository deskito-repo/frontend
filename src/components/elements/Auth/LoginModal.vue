<script lang="ts" setup>
import Modal from 'src/components/common/Modal.vue';
import useLoginModal from 'src/composables/useLoginModal';
import useSignUpModal from 'src/composables/useSignUpModal';
import LoginForm from './LoginForm.vue';

const loginModal = useLoginModal();
const signUpModal = useSignUpModal();
const goToSignUp = async () => {
  await loginModal.close();
  signUpModal.open();
};
</script>
<template>
  <Modal :title="$t('signin.account')">
    <LoginForm @wantTosignUp="goToSignUp" />
  </Modal>
</template>
<style lang="scss" scoped>
</style>
