<template>
  <div>
    <div v-for="item in this.$store.state.asks" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  // crated : 컴포넌트가 생성 되자마자 실행되는 hook
  created() {
    this.$store.dispatch("FETCH_ASKS");
    // fetchAskList()
    //   .then((response) => (this.ask = response.data))
    //   .catch(console.log);
  },
  // beforeMount
  // mounted
};
</script>

<style></style>
