import Vue from 'vue'
import App from './App.vue'
import { checkUser } from './auth';
import router from './router'
import store from './store'

require("@/assets/css/iamk.scss");
require("@/assets/css/app.scss");

Vue.config.productionTip = false

checkUser(store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')