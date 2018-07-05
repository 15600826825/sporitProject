import Vue from 'vue';
import Router from 'vue-router';
import external from './external/external.js';
import internal from './internal/internal.js';

Vue.use( Router );
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
   ...external,
   ...internal
  ]
})
