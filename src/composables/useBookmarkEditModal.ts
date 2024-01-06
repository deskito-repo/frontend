import { createGlobalState } from '@vueuse/core';
import BookmarkEditModal, { type Props } from 'src/components/elements/BookmarkBox/BookmarkEditModal.vue';
import { useModal } from './useModal';

const state = createGlobalState((attrs?: Props) => useModal({
  component: BookmarkEditModal,
  attrs,
}));
export default (attrs?: Props) => state(attrs);
