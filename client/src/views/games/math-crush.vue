<template>
  <div class="h-100 " ref="grid">
    <Loader v-if="loading"/>

      
    <div v-else class="grid-container d-flex flex-column align-items-center flex-grow-1 mb-2  "> 
      <div class="d-flex justify-content-between align-items-center bg-white shadow-sm p-3 px-5 my-3 w-75">
        <p class="mb-0">Score:
          <span class="text-dark">{{this.score}}</span>
          </p>
        <p class="mb-0 text-danger">High Score:<span></span></p>
        </div>
      
      <draggable  class="grid h-75 px-3 rounded rounded-3 my-auto"  >
        <transition-group>
          <div v-for="(square, index) in this.width*this.width" :id="index" :key="index" class="dragItem  d-flex justify-content-center align-items-center">
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
        score: 0,
        width: 5,
        squares: [],
        timeout: 4500,
        loading: true,
        colourBeingDragged: null,
        colourBeingReplaced: null,
        squareIdBeingDragged: null,
        squareIdBeingReplaced: null,
        squareColours:['square-red','square-pink','square-green','square-purple', 'square-orange']
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

          this.checkColumnForThree()
          this. checkRowForThree()

          setInterval(_ =>{
            this.replaceSquares()

          },100)
      },

      replaceSquares(){
        for(let i=0; i<20; i++){
          if(this.squares[i + this.width].dataset.colour === 'bg-white'){
            this.squares[i + this.width].dataset.colour = this.squares[i].dataset.colour
            this.squares[i + this.width].classList.replace('bg-white', this.squares[i].dataset.colour)

            this.squares[i].classList.replace( this.squares[i].dataset.colour, 'bg-white')
            this.squares[i].dataset.colour = 'bg-white'

            const firstRow = [0,1,2,3,4,5]
            const isFirstRow = firstRow.includes(i)

            if(isFirstRow && this.squares[i].dataset.colour === 'bg-white'){
              let rand =  Math.floor(Math.random() * this.squareColours.length)
              this.squares[i].classList.replace('bg-white', this.squareColours[rand] )
              this.squares[i].dataset.colour = this.squareColours[rand]
            }

          }
        }
      },

      checkColumnForThree(){
        for(let i = 0; i<14; i++){
          let columnOfThree = [i, i+this.width, i+this.width*2]
          let decidedColour = this.squares[i].dataset.colour
          const isBlank = this.squares[i].dataset.colour ==='bg-white'

          if(columnOfThree.every(index => this.squares[index].dataset.colour === decidedColour && !isBlank)){
            this.score+=3
            columnOfThree.forEach(index => {
              this.squares[index].dataset.colour = 'bg-white'
              this.squares[index].classList.replace(decidedColour, 'bg-white')
            })
          }
        }
      },

      checkRowForThree() {
        for (let i = 0; i < 22; i ++) {
          let rowOfThree = [i, i+1, i+2]
          let decidedColour = this.squares[i].dataset.colour
          const isBlank = this.squares[i].dataset.colour === 'bg-white'
      
          const notValid = [3, 4, 8, 9, 13, 14, 18,19]
          if (notValid.includes(i)) continue

          if(rowOfThree.every(index => this.squares[index].dataset.colour === decidedColour && !isBlank)) {
            this.score+=3
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
    }
  }

</script>

<style scoped>

  .grid-container{
    width: 100%;
    height: 100%;
    background-image: url('@/assets/img/jungle-background.webp');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .grid{
    width: 95%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
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
    height: 20%;
    width: 20%;
  }




</style>