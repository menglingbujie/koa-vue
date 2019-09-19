import Vue from 'vue'
import SpaceFrame from './SpaceFrame.vue'
import router from './router';
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(SpaceFrame)
}).$mount('#space')
