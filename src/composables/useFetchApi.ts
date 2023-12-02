import { createFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { useDialog } from './useDialog';

export const useFetchApi = (baseUrl: string) => {
  const dialog = useDialog();
  const router = useRouter();
  const useFetch = createFetch({
    combination: 'overwrite',
    options: {
      onFetchError(ctx) {
        if (!ctx.response) {
          return ctx;
        }
        const statusCode = ctx.response.status;
        if (ctx.response?.status === 401) {
          router.replace('/login');
          ctx.error = { msg: 'unauthorized' };
          return ctx;
        }
        if (statusCode >= 500) {
          dialog.alert('서버가 잠시 원활하지 않습니다. 나중에 다시 시도해주세요.');
          ctx.error = { msg: 'server unavailable' };
          return ctx;
        }
        ctx.error = null;
        return ctx;
      },
    },
  });
  return {
    api: <T>(url = '') => useFetch<T>(url.replace(/^(?!.*\/\/)\/?/, `${baseUrl}/`)),
  };
};
