<template>
  <div class="h-100 "  ref="grid">
    <Loader v-if="loading"/>
    <div v-else class="d-flex justify-content-center align-items-center w-100 h-100 px-3">
      <draggable  class="grid h-75 " >
        <transition-group>
          <div v-for="(square, index) in 64" :id="index" :key="index" class="dragItem bg-primary rounded rounded-3 border d-flex justify-content-center align-items-center">
            
            <Square @drop="dragDrop" @dragstart="dragStart" @dragend="dragEnd"/>
          

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
        timeout: 100,
        loading: true,
        squares: [],
        colourBeingDragged: null,
        colourBeingReplaced: null,
        squareIDBeingDragged: null,
        squareIDBeingReplaced: null,

        squareColours:
        [
          'square-red',
          'square-pink',
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
              square.setAttribute('data-colour', colour)
              this.squares.push(square)
            })
        }, this.timeout+50)
      },


      dragStart(e){
        const dragItem = e.target.closest('.dragItem')
        const square =  dragItem.firstElementChild
        this.squareIDBeingDragged = parseInt(dragItem.getAttribute('id'))
        this.colourBeingDragged =  square.dataset.colour
      },

      // dragOver(){},
      // dragEnter(){},
      // dragLeave(){},


      dragDrop(e){
        const dragItem = e.target.closest('.dragItem')
        const square =  dragItem.firstElementChild

        this.colourBeingReplaced = square.dataset.colour
        this.squareIDBeingReplaced = parseInt(dragItem.getAttribute('id'))

        square.classList.replace(this.colourBeingReplaced, this.colourBeingDragged) 
        square.dataset.colour = this.colourBeingDragged 

        this.squares[this.squareIDBeingDragged].classList.replace( this.colourBeingDragged, this.colourBeingReplaced)
        this.squares[this.squareIDBeingDragged].dataset.colour = this.colourBeingReplaced

      },



      dragEnd(e){
        
       // console.log('dragEnd');
      },













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




</style>