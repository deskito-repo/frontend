import type { Directive } from 'vue';

type Options = {
  /** custom width */
  width?: number;
  color?: string;
  /** animation key */
  key: string;
  styles?: string;

  /**
   * @description
   * ms
   * @default 1000
   * */
  duration?: number;
}
const startEffect = (el: HTMLElement, options: Options) => {
  const {
    key,
    duration = 1000,
    styles = '',
  } = options || {};
  // eslint-disable-next-line no-param-reassign
  el.style.position = 'relative';
  const width = `${options?.width || el.offsetWidth}px`;
  const effectElement = document.createElement('div');
  effectElement.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    margin: calc(${width} / -2) 0 0 calc(${width} / -2);
    width: ${width};
    height: ${width};
    border-radius: 50%;
    content: '';
    // opacity: 0;
    pointer-events: none;
    animation: ${key}-effect ${duration}ms ease-out forwards;
  ${styles}`;
  el.append(effectElement);
  setTimeout(() => effectElement.remove(), duration);
};
const events: (keyof GlobalEventHandlersEventMap)[] = ['touchstart', 'click'];
export const createEffectDirective = (globalOptions?: Options): Directive => {
  let event: () => void;
  return {
    mounted: (el: HTMLElement, { value: options }: Record<'value', Options>) => {
      event = () => startEffect(el, {
        ...globalOptions,
        ...options,
      });
      events.forEach((eventName) => el.addEventListener(eventName, event));
    },
    unmounted: (el: HTMLElement) => {
      events.forEach((eventName) => el.removeEventListener(eventName, event));
    },
  };
};
