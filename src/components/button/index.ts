import PButton from './PButton.vue';
import Vue from 'vue';


const uiList = [
  PButton,
];

export {
  PButton,
};

// Declare install function executed by Vue.use()
export default {
  install(vue: typeof Vue, options?: any) {
    if ((this as any).installed) {
      return;
    }
    (this as any).installed = true;
    vue.component('PButton', PButton);
  },
};
