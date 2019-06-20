import PButton from './components/button';
import PNotice from './components/notice';
import Vue from 'vue';

export {
  PButton,
  PNotice,
};

export default {
  install(vue: typeof Vue, options?: object) {
    if ((this as any).installed) {
      return;
    }
    vue.use(PButton);
    vue.use(PNotice)
  },
};
