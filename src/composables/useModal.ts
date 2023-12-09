import {
  useModal as useFinalModal,
} from 'vue-final-modal';

type Props = Parameters<typeof useFinalModal>[0];
export const useModal = (options?: Props) => {
  const { close, open } = useFinalModal({
    ...options,
    attrs: {
      ...options?.attrs,
      onClose: () => close(),
    },
  });
  return {
    open,
    close,
  };
};
