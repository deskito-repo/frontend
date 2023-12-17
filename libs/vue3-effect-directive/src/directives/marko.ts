import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/marko.css';

export const vMarko = createEffectDirective({
  key: 'marko',
  duration: 700,
  styles: 'box-shadow: inset 0 0 0 2px rgba(111,148,182,0.3);',
});
