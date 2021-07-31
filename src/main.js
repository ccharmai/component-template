import Vue from 'vue'
import Custom from './Custom.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Custom),
}).$mount('#app')
