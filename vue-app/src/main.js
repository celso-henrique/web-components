import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import App from './App.vue'

Vue.config.productionTip = false

const CustomElement = wrap(Vue, App)
window.customElements.define('my-custom-element', CustomElement)
