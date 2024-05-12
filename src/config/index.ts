export const runtimeEnvironment: 'web' | 'chrome-extension' = (() => {
  const isOnChromeExtension = typeof chrome !== 'undefined' && Object.hasOwn(chrome, 'extension');
  if (isOnChromeExtension) {
    return 'chrome-extension';
  }
  return 'web';
})();
export const env = (() => {
  if (import.meta.env.DEV) {
    return 'dev';
  }
  return 'prod';
})();
