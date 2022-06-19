<template>
  <div>
    <div v-for="item in this.$store.state.news" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // console.log("호출 전:", this);

    // // 1.
    // fetchNewsList()
    //   .then((response) => {
    //     console.log("호출 후: ", this);
    //     this.news = response.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
