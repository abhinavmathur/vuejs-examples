import Vue from 'vue'
import App from './App.vue'

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#container',
        render: h => h(App)
    })
});