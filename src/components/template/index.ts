import PTemplate from './PTemplate.vue';
import Vue from 'vue';


export {
  PTemplate,
};

// Declare install function executed by Vue.use()
export default {
  install(vue: typeof Vue, options?: any) {
    if ((this as any).installed) {
      return;
    }
    (this as any).installed = true;
    Vue.component('PTemplate', PTemplate);
  },
};
