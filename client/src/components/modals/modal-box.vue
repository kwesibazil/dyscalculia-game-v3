<template>
  <div class="modal-box" :class="{'modal-box--active': isVisible('modalBox')}"></div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'modalBox',
    computed: mapGetters(['isVisible'])
  }
</script>

<style scoped>
  .modal-box{
      top: 0;
      left: 0;
      width: 0%;
      z-index: 5;
      overflow: auto;
      position: fixed;
    }.modal-box--active{
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.4);
      transition: background-color 0.5s linear;
    }
</style>