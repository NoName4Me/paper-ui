import { PButton } from './components/button';
import Vue from 'vue';

export {
  PButton,
}

export default {
  install(vue: typeof Vue, options?: object) {
    if ((this as any).installed) {
      return;
    }
    vue.component('PButton', PButton);
  }
}
