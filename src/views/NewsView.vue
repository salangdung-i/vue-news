<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");

    // var vm = this;
    // // 1
    // fetchNewsList()
    //   .then(function(response){
    //     console.log(response);
    //     // 2
    //     vm.users = response.data;
    //   })
    // .catch(function(error){
    //   console.log(error);
    // });
  },
};
</script>

<style></style>
