import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/jelena.css';

/** jelena + sanja */
export const vBalloon = createEffectDirective({
  key: 'sanja',
  duration: 1000,
  styles: `
    border: 2px solid rgba(111,148,182,0.5);
    background: rgba(111,148,182,0.1);
  `,
});
