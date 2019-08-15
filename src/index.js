import Vue from 'vue';
import App from './app/index.vue';
import './page/index.sass';

new Vue({
  el: '#app',
  render: h => h(App)
})