import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.devtools = true

window.initApp = is_admin => new Vue({
  store,
  render: h => h(App, { props: { is_admin } })
}).$mount('#app')
