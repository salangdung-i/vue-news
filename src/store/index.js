import Vue from "vue";
import Vuex from "vuex";

// vuex 상태관리 도구

import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },

  mutations: {
    // 3. mutations에서  state에 넣어줌
    // SET_NEWS:function(){}
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
    },
    SET_ASKS(state, data) {
      state.asks = data;
    },
  },
  // 비동기 호출 하는 것
  actions: {
    FETCH_NEWS(context) {
      // 1. api 호출
      fetchNewsList()
        .then((response) => {
          // 2. mutations 에 넣어줌
          // vuex의 구조상 
          // action : 비동기 호출 
          // Mutation : 데이터이동 -> state 
          context.commit("SET_NEWS", response.data); // api 이용해서 muations에 data 넣어줌.
        })
        .catch((error) => console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          context.commit("SET_JOBS", response.data);
        })
        .catch((error) => console.log(error));
    },
    FETCH_ASKS(context) {
      fetchAskList()
        .then((response) => {
          context.commit("SET_ASKS", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
