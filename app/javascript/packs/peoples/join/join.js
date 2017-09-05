import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import axios from 'axios'
import VueAxios from 'vue-axios'

let token = document.head.querySelector("meta[name=csrf-token]").content;
axios.defaults.headers.common['X-CSRF-Token'] = token;
axios.defaults.headers.common['Accept'] = 'application/json';

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueAxios, axios);

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#vue_container',
        render: h => h(App)
    })
});