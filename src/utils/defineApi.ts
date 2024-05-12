import wretch from 'wretch';
import AbortAddon from 'wretch/addons/abort';
import { useRouter } from 'vue-router';
import { retry } from 'wretch/middlewares';

wretch().middlewares([
  retry({
    delayTimer: 500,
    maxAttempts: 3,
    retryOnNetworkError: false,
    resolveWithLatestResponse: false,
  }),
]);
const base = wretch('http://localhost:4124')
  .addon(AbortAddon());

const defineApi = (baseUri = '') => {
  const router = useRouter();
  let controller: AbortController;
  return {
    api: (uri = '') => {
      controller = new AbortController();
      return base
        .resolve((r) => {
          r.unauthorized(() => {
            router.replace('/login');
          });
          return r;
        })
        .url(baseUri)
        .url(uri)
        .signal(controller);
    },
    abort: () => controller?.abort(),
  };
};
export {
  defineApi,
};
