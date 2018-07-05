import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import axios from 'axios'
import router from './router/routers.js'


Vue.config.productionTip = false
Vue.use(MuseUI);

Vue.prototype.hub = new Vue();
Vue.prototype.$ajax = axios;
Vue.prototype.$ajax.defaults.headers['Content-Type'] = 'application/json'
Vue.prototype.envPath = '';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
