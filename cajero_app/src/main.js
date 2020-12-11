import Vue from 'vue/dist/vue.js'
import App from './App'
import vueRouter from 'vue-router'

import router from './router'
Vue.use(vueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
})