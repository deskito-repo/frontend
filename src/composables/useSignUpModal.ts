import SignUpModal from 'src/components/elements/Auth/SignUpModal.vue';
import { createGlobalState } from '@vueuse/core';
import { useModal } from './useModal';

const state = createGlobalState(() => useModal({
  component: SignUpModal,
}));
export default () => state();
