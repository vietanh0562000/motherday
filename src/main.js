import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/routes'
import drr from '@minogin/vue-drag-resize-rotate'
import Vue2TouchEvents from 'vue2-touch-events'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
Vue.use(Vue2TouchEvents)

Vue.component('drr', drr)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
