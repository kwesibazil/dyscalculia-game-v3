<template>
  <div class="h-100 ">
    <Loader />

  
    <div>
      math puzzle
    </div>
  </div>
</template>


<script>
  import Loader from '@/components/utilities/game-progress.vue'

  export default{
    name: 'math-puzzle',
    components:{
      Loader
    }
  }

</script>