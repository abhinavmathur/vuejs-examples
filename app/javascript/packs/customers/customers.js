import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from './routes'
import Paginate from 'vuejs-paginate'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.component('paginate', Paginate);


let token = document.head.querySelector("meta[name=csrf-token]").content;
axios.defaults.headers.common['X-CSRF-Token'] = token;
axios.defaults.headers.common['Accept'] = 'application/json';


const router = new VueRouter({
    base: '/',
    routes: routes
});

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        router: router,
        el: '#vue_container',
        render: h => h(App)
    })
});