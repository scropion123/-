// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

/* 按需导入mint-ui */
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'//header组件
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icon-extra.css'


// 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
