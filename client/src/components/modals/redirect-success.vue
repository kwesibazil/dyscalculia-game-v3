<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-75 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-check-circle-fill fill-primary" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>
    <h1 class="text-center mt-4  fs-3">{{redirectMsg}}</h1>
    <span class="text-muted">please wait while we redirect you</span>
    <img src="@/assets/img/ajax-loader.gif" class="mt-4" alt="loader">
  </div>
</template>


<script>
  import {mapGetters} from 'vuex'
  export default{
    name: 'registration success',
    computed: mapGetters(['redirectMsg'])
  }
</script>


<style scoped>
svg{
}
</style>