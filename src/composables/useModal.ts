import { HistoryTrap } from 'src/utils/HistoryTrap';
import {
  useModal as useFinalModal,
} from 'vue-final-modal';

type Props = Parameters<typeof useFinalModal>[0];
export const useModal = (options?: Props) => {
  let historyTrap: HistoryTrap;
  const { close, open } = useFinalModal({
    ...options,
    attrs: {
      ...options?.attrs,
      onClose: () => {
        historyTrap.catch();
        return close();
      },
    },
  });
  return {
    open: () => {
      historyTrap = new HistoryTrap('modal');
      historyTrap.onCatch(close);
      return open();
    },
    close,
  };
};
