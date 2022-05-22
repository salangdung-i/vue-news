import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";

// check!
// 이 둘의 차이가 뭔지?
// import { router } from "./router/index.js";
// import  router  from "./router/index.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
