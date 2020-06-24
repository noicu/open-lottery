import Vue from "vue";

import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/index.css";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import timer from "@/core/timer";


Vue.prototype.$timer = new timer();
console.log(Vue.prototype)

Vue.config.productionTip = false;

Vue.use(VXETable);

// 给 vue 实例挂载全局窗口对象，属性名称随意定义，例如：$XModal
Vue.prototype.$modal = VXETable.modal;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
