import { Options } from 'src/types';
import type { Directive } from 'vue';
import { useGlobalOption } from './useGlobalOption';

type EffectOptions = Options & { key: string };

const startEffect = (el: HTMLElement, options: EffectOptions) => {
  const globalOption = useGlobalOption();
  const {
    key,
    duration = 1000,
    styles = '',
    color = 'rgba(111,148,182,0.1)',
  } = {
    ...globalOption.get(),
    ...options,
  };
  // eslint-disable-next-line no-param-reassign
  el.style.position = 'relative';
  const width = `${options?.width || el.offsetWidth}px`;
  const effectElement = document.createElement('div');
  effectElement.style.cssText = `
    --effect-color: ${color};
    position: absolute;
    top: 50%;
    left: 50%;
    margin: calc(${width} / -2) 0 0 calc(${width} / -2);
    width: ${width};
    height: ${width};
    border-radius: 50%;
    content: '';
    pointer-events: none;
    animation: ${key}-effect ${duration}ms ease-out forwards;
  ${styles}`;
  el.append(effectElement);
  // setTimeout(() => effectElement.remove(), duration);
};
const events: (keyof GlobalEventHandlersEventMap)[] = ['touchstart', 'click'];
export const createEffectDirective = (globalOptions?: EffectOptions): Directive => {
  let event: () => void;
  return {
    mounted: (el: HTMLElement, { value: options }: Record<'value', EffectOptions>) => {
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
