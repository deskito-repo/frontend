import wretch from 'wretch';
import AbortAddon from 'wretch/addons/abort';
import { useRouter } from 'vue-router';
import { retry } from 'wretch/middlewares';

const router = useRouter();
wretch().middlewares([
  retry({
    delayTimer: 500,
    maxAttempts: 3,
    retryOnNetworkError: false,
    resolveWithLatestResponse: false,
  }),
]);
const base = wretch()
  .addon(AbortAddon())
  .resolve((r) => {
    r.unauthorized(() => {
      router.replace('/login');
    });
    return r;
  });

export {
  base as api,
};
