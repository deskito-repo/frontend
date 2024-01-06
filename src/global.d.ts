import { Icon } from '@iconify/vue';

declare module 'vue' {
  export interface GlobalComponents {
    Icon: Icon,
  }
}
