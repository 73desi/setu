import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import waterfall from "vue-waterfall2";
import 'jquery/dist/jquery';
Vue.use(waterfall);
Vue.config.productionTip = false
Vue.prototype.axios = axios;
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
