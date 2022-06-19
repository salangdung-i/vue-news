<template>
  <div>
    <div v-for="item in askItems" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
// what is mapState

export default {
  computed: {
    ...mapGetters({
      askItems: "fecthedAsk",
    }),

    // 2.
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),

    // 1.
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  // crated : 컴포넌트가 생성 되자마자 실행되는 hook
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>

<style></style>
