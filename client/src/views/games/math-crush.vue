<template>
  <div class="h-100 "  ref="grid">
    <Loader v-if="loading"/>

 <!-- v-show="!loading" -->
    <div v-else class="d-flex justify-content-center align-items-center w-100 h-100 px-3">
      <draggable  class="grid h-75 " >
        <transition-group>
          <div v-for="(square, index) in 64" :key="index" class=" bg-primary rounded rounded-3 border d-flex justify-content-center align-items-center">
            <Square />
          </div>
        </transition-group>
      </draggable>
    </div>
    
  


  </div>
</template>




<script>
  import Loader from '@/components/utilities/game-progress.vue'
  import Square from '@/components/game/square.vue'
  import { VueDraggableNext } from 'vue-draggable-next'

  export default{
    name: 'math-crush',
    data(){
      return{
        timeout: 4500,
        loading: true,
        squareColours:
        [
          'square-red',
          'square-blue',
          'square-yellow',
          'square-green',
          'square-purple',
          'square-orange'
        ]
      }
    },
    components:{
      Square,
      Loader,
      draggable: VueDraggableNext,
    
    },
    methods: {
      createGrid(){

        setTimeout(_ =>{
            const grid = this.$refs.grid
            const squares = grid.getElementsByClassName('square')
      
            Array.from(squares).forEach(square =>{
              const rand =  Math.floor(Math.random() * this.squareColours.length)
              const colour = this.squareColours[rand]
              square.classList.toggle(colour)
              square.setAttribute('draggable', true)
            })
        }, this.timeout+50)
      }
    },

    mounted(){
      this.createGrid()
      setTimeout(_ => this.loading = false, this.timeout)
    }
  }

</script>

<style scoped>
  .grid{
    width: 100%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* background-image: url('@/assets/img/crush.jpg');
    background-repeat: no-repeat;
    background-size: cover; */
  }

  @media (min-width:575px) {
    .grid{
      width: 75%; 
    }
  }

   @media (min-width:992px) {
    .grid{
      width: 55%; 
    }
  }

  .grid div{
    height: 12.5%;
    width: 12.5%;
  }

  .square-red{
    background-color: var(--bs-danger);
  }
  .square-blue{
    background-color: var(--bs-dark);
  }
  .square-yellow{
    background-color: rgb(250, 227, 24);
  }
  .square-green{
    background-color: var(--bs-success);
  }
  .square-purple{
    background-color: rgb(201, 6, 120);
  }
  .square-orange{
    background-color: var(--bs-warning);
  }


</style>