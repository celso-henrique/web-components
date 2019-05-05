import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';

Vue.config.productionTip = false;

const VueApp = wrap(Vue, App);
customElements.define('vue-app', VueApp);

export default VueApp;
