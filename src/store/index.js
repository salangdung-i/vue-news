import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";

// vuex 상태관리 도구
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },
  // computed와 동일한 속성, 다만 store에 존재
  getters: {
    fecthedAsk(state) {
      return state.asks;
    },
  },
  // 3. mutations에서  state에 넣어줌
  // SET_NEWS:function(){}
  mutations: mutations,
  // 비동기 호출 하는 것
  actions: actions,
});
