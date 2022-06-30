<template>
  <div class="h-100 " ref="grid">
    <Loader v-if="loading"/>

    <div v-else class="d-flex flex-column w-100 h-100">
      <div class="bg-white shadow-sm p-3">Score: {{this.score}}</div>

      <div class="d-flex justify-content-center my-5 w-100 flex-grow-1"> 
        <draggable  class="grid h-75 px-3" >
          <transition-group>
            <div v-for="(square, index) in this.width*this.width" :id="index" :key="index" class="dragItem bg-primary rounded rounded-3 border d-flex justify-content-center align-items-center">
              <Square @drop="dragDrop" @dragstart="dragStart" @dragend="dragEnd"/>
            </div>
          </transition-group>
        </draggable>
      </div>
      
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
        score: 0,
        width: 8,
        squares: [],
        timeout: 100,
        loading: true,
        colourBeingDragged: null,
        colourBeingReplaced: null,
        squareIdBeingDragged: null,
        squareIdBeingReplaced: null,
        squareColours:['square-red','square-pink','square-yellow','square-green','square-purple', 'square-orange']
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
        this.squareIdBeingDragged = parseInt(dragItem.getAttribute('id'))
        this.colourBeingDragged =  square.dataset.colour
      },

      dragDrop(e){
        const dragItem = e.target.closest('.dragItem')
        const square =  dragItem.firstElementChild

        this.colourBeingReplaced = square.dataset.colour
        this.squareIdBeingReplaced = parseInt(dragItem.getAttribute('id'))

        square.classList.replace(this.colourBeingReplaced, this.colourBeingDragged) 
        square.dataset.colour = this.colourBeingDragged 

        this.squares[this.squareIdBeingDragged].classList.replace( this.colourBeingDragged, this.colourBeingReplaced)
        this.squares[this.squareIdBeingDragged].dataset.colour = this.colourBeingReplaced
      },

      dragEnd(){
        console.log('drag end');

        let validMoves = [
          this.squareIdBeingDragged -1,
          this.squareIdBeingDragged +1,
          this.squareIdBeingDragged - this.width,
          this.squareIdBeingDragged + this.width
        ]

        let validMove = validMoves.includes(this.squareIdBeingReplaced)

        if(this.squareIdBeingReplaced && validMove)
          this.squareIdBeingReplaced = null
        else if(this.squareIdBeingReplaced && !validMove){
          this.squares[this.squareIdBeingReplaced].classList.replace(this.colourBeingDragged, this.colourBeingReplaced)
          this.squares[this.squareIdBeingDragged].classList.replace(this.colourBeingReplaced, this.colourBeingDragged)
          this.squares[this.squareIdBeingReplaced].dataset.colour = this.colourBeingReplaced
          this.squares[this.squareIdBeingDragged].dataset.colour = this.colourBeingDragged
        }else{
          this.squares[this.squareIdBeingDragged].classList.replace(this.colourBeingReplaced, this.colourBeingDragged)
          this.squares[this.squareIdBeingDragged].dataset.colour = this.colourBeingDragged
        }

      },


      checkColumnForThree(){
        for(let i = 0; i<47; i++){
          let columnOfThree = [i, i+this.width, i+this.width*2]
          let decidedColour = this.squares[i].dataset.colour
          const isBlank = this.squares[i].dataset.colour ==='bg-white'

          if(columnOfThree.every(index => this.squares[index].dataset.colour === decidedColour && !isBlank)){
            columnOfThree.forEach(index => {
              this.squares[index].dataset.colour = 'bg-white'
              this.squares[index].classList.replace(decidedColour, 'bg-white')
            })
          }
        }
      },


      checkRowForThree() {
        for (let i = 0; i < 61; i ++) {
          let rowOfThree = [i, i+1, i+2]
          let decidedColour = this.squares[i].dataset.colour
          const isBlank = this.squares[i].dataset.colour === 'bg-white'
      
          const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]
          if (notValid.includes(i)) continue

          if(rowOfThree.every(index => this.squares[index].dataset.colour === decidedColour && !isBlank)) {
            rowOfThree.forEach(index => {
              this.squares[index].dataset.colour = 'bg-white'
              this.squares[index].classList.replace(decidedColour, 'bg-white')
            })
          }
        }
      }

    },

    mounted(){
      this.createGrid()
      setTimeout(_ => this.loading = false, this.timeout)

      setInterval(_ =>{
        this.checkColumnForThree()
        this. checkRowForThree()
      },5000)

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
      width: 40%; 
    }
  }

  .grid div{
    height: 12.5%;
    width: 12.5%;
  }




</style>