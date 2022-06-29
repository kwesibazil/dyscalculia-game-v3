<template>
  <div>
    <h1>TO DO -> Math QUIZ RESULTS LAYOUT</h1>
    <div  v-for="(results, index) in getRootState('mathQuizResults')" :key="index" >
      {{results}}
    </div>
  </div>
</template>




<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'math-results',
    computed: mapGetters(['getRootState'])
  }

</script>