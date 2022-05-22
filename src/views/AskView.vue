<template>
  <div>
    <div v-for="item in ask" v-bind:key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      ask: [],
    };
  },

  // crated : 컴포넌트가 생성 되자마자 실행되는 hook
  created() {
    fetchAskList()
      .then((response) => (this.ask = response.data))
      .catch(console.log);
  },
  // beforeMount
  // mounted
};
</script>

<style></style>
