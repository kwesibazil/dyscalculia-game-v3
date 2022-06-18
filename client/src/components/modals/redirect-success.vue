<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-75 ">
    <img src="@/assets/img/sm-logo.png" alt="logo">
    <h1 class="text-center mt-4  fs-3">{{redirectMsg('primary')}}</h1>
    <span class="text-muted">{{redirectMsg('secondary')}}</span>
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


