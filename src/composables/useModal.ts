import { HistoryTrap } from 'src/utils/HistoryTrap';
import {
  useModal as useFinalModal,
} from 'vue-final-modal';

type Props = Parameters<typeof useFinalModal>[0];
export const useModal = (options?: Props) => {
  let historyTrap: HistoryTrap;
  const attrs = {
    ...options?.attrs,
    clickToClose: true,
    escToClose: true,
  };
  const modal = useFinalModal({
    ...options,
    attrs,
  });
  const close = () => {
    historyTrap.catch();
    return modal.close();
  };
  attrs.onClose = close;
  attrs.onClosed = close;
  return {
    open: (option?: { key: string }) => {
      const { key } = option || {};
      historyTrap = new HistoryTrap(key || 'modal');
      historyTrap.onCatch(modal.close);
      return modal.open();
    },
    close,
  };
};
