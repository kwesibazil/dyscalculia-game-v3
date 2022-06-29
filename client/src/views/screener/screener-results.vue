<template>
  <div>
    <h1>TO DO -> Screener RESULTS LAYOUT</h1>
    <div  v-for="(results, index) in getRootState('screenerResults')" :key="index" >
      {{results}}
    </div>
  </div>
</template>




<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'screener-results',
    computed: mapGetters(['getRootState'])
  }

</script>