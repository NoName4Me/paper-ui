import PButton from './PButton.vue';
import Vue from 'vue';


const uiList = [
  PButton
]
// Vue.component('PButton', PButton);

// Declare install function executed by Vue.use()
function install(vue: typeof Vue, options?: any) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('MyComponent', PButton);
}

export { PButton };
