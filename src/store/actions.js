import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index.js";

export default {
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
  // destructuring 적용
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASKS", data);
      })
      .catch((error) => console.log(error));
  },
};
