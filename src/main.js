import dotEnv from 'dotenv';
dotEnv.config();
import Vue from 'vue';
import App from './App.vue';

// Import plugins
import './plugins/vuetify';

// Import stores
// import store from '@/store';
import store from './store/index'

// Import routes
import router from './router';

// Sync router with store
import { sync } from 'vuex-router-sync';

// Sync store with router
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
