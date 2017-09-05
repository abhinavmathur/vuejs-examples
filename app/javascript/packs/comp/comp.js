import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';


Vue.use(BootstrapVue);
Vue.use(VeeValidate);

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#container',
        render: h => h(App)
    })
});