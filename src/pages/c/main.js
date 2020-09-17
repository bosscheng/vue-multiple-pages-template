/**
 * Date:2020/9/17
 * Desc:
 */
import Vue from 'vue';
import App from './App.vue';

import '@/styles/c.scss';
import * as filters from '../../filters' // global filters


Vue.config.productionTip = false;
// 设置过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});
new Vue({
    render: h => h(App)
}).$mount('#app');
