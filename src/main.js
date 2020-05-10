import Vue from 'vue' 
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/global.css'
import './iconfont/iconfont.css'

Vue.use(ElementUI)
new Vue({
  el:'#app',
  components:{
    App
  },
  render:h => h(App),
  router

})