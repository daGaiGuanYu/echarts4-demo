import Vue from 'vue';
import App from './component/app.vue';
import './page/index.sass';

new Vue({
  el: '#app',
  render: h => h(App)
})