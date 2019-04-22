import PNotice from './PNotice.vue';
import Vue from 'vue';

PNotice.

export {
  PNotice,
};

// Declare install function executed by Vue.use()
export default {
  install(vue: typeof Vue, options?: any) {
    if ((this as any).installed) {
      return;
    }
    (this as any).installed = true;
    Vue.component('PTemplate', PNotice);
  },
};
