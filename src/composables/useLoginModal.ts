import LoginModal from 'src/components/elements/Auth/LoginModal.vue';
import { createGlobalState } from '@vueuse/core';
import { useModal } from './useModal';

const state = createGlobalState(() => useModal({
  component: LoginModal,
}));
export default () => state();
