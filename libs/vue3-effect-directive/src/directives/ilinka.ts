import { createEffectDirective } from '../composables/createEffectDirective';
import '../assets/animations/fade.css';

export const vIlinka = createEffectDirective({
  key: 'fade',
  duration: 500,
  styles: 'background: rgba(111,148,182,0.25);',
});
