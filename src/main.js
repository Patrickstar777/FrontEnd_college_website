import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.css'

// element-ui调用
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)

//axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 百度地图调用
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* 需要注册百度地图开发者来获取你的ak */
  ak: 'E5OKaBy9WAzhfXoAqeG64j3UFzniUIvT'
})


//引入混合
import { mixin } from './common'
Vue.mixin(mixin)

//引入jsonp解决跨域
import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)




Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router,
  beforeCreate() {
  }
}).$mount('#app')
