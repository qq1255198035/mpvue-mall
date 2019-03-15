import Vue from 'vue'
import App from './App'
var Fly = require("./../node_modules/flyio/dist/npm/wx")
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
const fly = new Fly
Vue.prototype.$http = fly
app.$mount()
export default {
  config: {
    'pages': [
      'pages/index/main',
      'pages/userCenter/index/main'
    ],
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#fff',
      'navigationBarTitleText': '第一个小程序',
      'navigationBarTextStyle': 'black'
    }
  }
}
