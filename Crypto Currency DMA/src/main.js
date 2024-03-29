import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import { routes } from './routes';

import VueResource from 'vue-resource';

import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://dma-cryptocurrency.firebaseio.com/';

const router = new VueRouter({
	mode:'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
