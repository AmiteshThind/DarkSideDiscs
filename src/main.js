import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import './../node_modules/bulma/css/bulma.css';
import VueRouter from 'vue-router';
 import Landing from './components/Landing'
import Dashboard from './components/Dashboard';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    {path: '/', component: Landing},
    {path: '/dashboard',component: Dashboard}
];

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
