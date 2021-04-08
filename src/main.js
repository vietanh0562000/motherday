import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/routes'
import drr from '@minogin/vue-drag-resize-rotate'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)
Vue.component('drr', drr)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
