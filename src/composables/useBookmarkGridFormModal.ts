import BookmarkGridContainerModal from 'src/components/elements/BookmarkBox/BookmarkGridFormModal.vue';
import { createGlobalState } from '@vueuse/core';
import { useModal } from './useModal';

const state = createGlobalState(() => useModal({
  component: BookmarkGridContainerModal,
}));
export default () => state();
