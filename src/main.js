// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';

import router from './router';

import store from "./store/index";

import elui from "./plugins/elui";

import {DatePicker,TimePicker} from "element-ui"

import "./utils/flexble";

import "./static/scss/common.scss";

import "./static/font/iconfont.css";

import "element-ui/lib/theme-chalk/index.css"

Vue.use(elui)

Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
