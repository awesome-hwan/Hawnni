import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import App from './App.vue'

//Using Vue plugin
Vue.use(VueRouter);
Vue.use(VueResource);

//Global Settings
Vue.http.options.root = 'https://vue-http-81e7b.firebaseio.com/UserInfo.json';
// Vue.http.headers.common['Authorizetion'] = 'Token YXBpOnBhc3B3B3Hk';

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
