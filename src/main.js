import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './plugins/element.js';
import routes from './route/routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    console.log('去新游戏了');
  }
  next();
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
