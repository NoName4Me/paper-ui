import { PButton } from './components/button';
import Vue from 'vue';

export {
  PButton,
}

export default {
  install: (vue: typeof Vue, options?: object) => {
    vue.component('PButton', PButton);
  }
}




