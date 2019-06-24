import PInput from './PInput.vue';
import Vue from 'vue';


export {
  PInput,
};

// Declare install function executed by Vue.use()
export default {
  install(vue: typeof Vue, options?: any) {
    if ((this as any).installed) {
      return;
    }
    
    (this as any).installed = true;
    vue.component('PInput', PInput);
  },
};
