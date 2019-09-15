import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.config.devtools = true

window.initApp = props => new Vue({
    store,
    vuetify,
    render: h => h(App, { props: { props } })
}).$mount('#app')