import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/routes'
Vue.config.productionTip = false
import drr from '@minogin/vue-drag-resize-rotate'

Vue.config.productionTip = false

Vue.component('drr', drr)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
