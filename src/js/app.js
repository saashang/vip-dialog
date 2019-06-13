'use strict'
// eslint-disable-next-line
import Vue from "vue"
// eslint-disable-next-line
import VIPDialog from '../../packages/dialog/js/index'
console.log(VIPDialog)
// eslint-disable-next-line
import AppComponent from '../components/app.vue'  
// eslint-disable-next-line
import ELEMENT from 'element-ui'  
// eslint-disable-next-line
import 'element-ui/lib/theme-chalk/index.css' 
// eslint-disable-next-line
import locale from 'element-ui/lib/locale/lang/zh-CN' 
// Install VIPDialog
Vue.use(VIPDialog, { message: 'VIP Dialog as LOV' })

Vue.use(ELEMENT, { size: 'medium' }, locale)

let App = Vue.extend(AppComponent)

window.vm = new App()
window.vm.$mount('#app')
