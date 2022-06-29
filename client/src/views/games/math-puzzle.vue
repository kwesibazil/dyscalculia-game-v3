<template>
  <div class="h-100 ">
    <Loader v-if="loading"/>

    <div v-else >
      math puzzle
    </div>
  </div>
</template>


<script>
  import Loader from '@/components/utilities/game-progress.vue'

  export default{
    name: 'math-puzzle',
    data(){
      return{
        loading: true
      }
    },
    components:{
      Loader
    },
    mounted(){
      setTimeout(_ => this.loading = false, 4500)
    }
  }

</script>