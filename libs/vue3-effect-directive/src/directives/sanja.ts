import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/sanja.css';

export const vSanja = createEffectDirective({
  key: 'sanja',
  duration: 1000,
  styles: 'background: rgba(111,148,182,0.1);',
});
