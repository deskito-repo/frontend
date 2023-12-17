import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/jelena.css';

export const vJelena = createEffectDirective({
  key: 'jelena',
  duration: 300,
  styles: 'border: 2px solid rgba(111,148,182,0.5);',
});
