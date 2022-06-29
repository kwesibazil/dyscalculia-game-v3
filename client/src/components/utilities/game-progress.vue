<template>
  <div v-if="loading" class="d-flex align-items-center justify-content-center h-100 bg-dark">
    <div class="d-flex flex-column justify-content-center align-items-center h-75 pb-5 pb-sm-0">
      <img src="@/assets/img/sm-logo-white.png" alt="logo">
      <h1 class="text-white text-center mt-4  fs-4">Loading</h1>
      <img src="@/assets/img/loading.gif" class="my-4" alt="loader">
    </div> 
  </div>
</template>



<script>
  export default{
    name: 'game-loading',
    data(){
      return{
        loading: true
      }
    },

    mounted(){
      setTimeout(_ => this.loading = false, 4500)
    }
  }

</script>

<style scoped>
  .loading{
    height: 100%;
    /* background-repeat: no-repeat; */
    /* background-image: url('@/assets/img/loading.jpg'); */
    background-size: cover;  
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

</style>