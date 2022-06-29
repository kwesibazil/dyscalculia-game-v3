<template>
  <div id="options" ref="options" class="d-flex flex-column align-items-center justify-content-center">
    <TransitionGroup name="slide-fade" mode="out-in" tag="ul" class="list-group">
      <li v-for="(quiz, index) in getRootState('quizzes').slice(getQuizValue(this.quizIndex), getQuizValue(this.quizIndex)+1)" :key="index"
       class="list-group-item  quiz border shadow-sm  rounded rounded-4 p-4" :class="{'border border-1 border-danger' :showQuizErr }">


        <div class="d-flex justify-content-between">
          <p class="mb fw-bold fst-italic text-center ">{{quiz.question}}</p>
          <span class="text-muted fs-8 d-none d-sm-block">{{getQuizValue(this.quizIndex)+1}}/{{getQuizValue(this.quizLength)}}</span>
        </div>

        <div class="mb-3 ">
          <form :id="quiz.name" >
            <div class="d-flex justify-content-evenly mb-3">
                <div class="position-relative ">
                  <input @click="answer" :id="optionA" :value="quiz.optionA" class="btn-check" name="quizOption" type="radio" autocomplete="off">
                  <label class="btn btn-outline-primary" :for="optionA">{{quiz.optionA}}</label>
                </div>
                <div class="position-relative ">
                  <input @click="answer" :id="optionB" :value="quiz.optionB" class="btn-check" name="quizOption" type="radio" autocomplete="off">
                  <label class="btn btn-outline-dark " :for="optionB">{{quiz.optionB}}</label>
                </div>
            </div>
            <div class="d-flex justify-content-evenly">
                <div class="position-relative">
                  <input @click="answer" :id="optionC" :value="quiz.optionC" class="btn-check" name="quizOption" type="radio" autocomplete="off">
                  <label class="btn btn-outline-danger " :for="optionC">{{quiz.optionC}}</label>
                </div>

                <div class="position-relative ">
                  <input @click="answer" :id="optionD" :value="quiz.optionD" class="btn-check" name="quizOption" type="radio" autocomplete="off">
                  <label class="btn btn-outline-warning " :for="optionD">{{quiz.optionD}}</label>
                </div>
            </div>
          </form>
        </div>
      </li>
    </TransitionGroup>
  </div> <!-- root container ends here -->
</template>


<script>
  import { mapGetters} from 'vuex'

  export default{
    name: 'math-question',
    computed: mapGetters(['getRootState', 'getQuizValue', 'showQuizErr']),
    data(){
      return{
        quizIndex: {object:'quiz', property:'index'},
        quizLength: {object:'quiz', property:'length'},
        optionA: "optionA",
        optionB: "optionB",
        optionC: "optionC",
        optionD: "optionD"
      }
    },
    methods: {
      async answer(e){
        const target = e.target
        const form =  target.closest('form')
        const value = e.target.getAttribute('value')
        const container = e.target.closest('.quiz')

        const formID = form.getAttribute('id')
        container.setAttribute('data-completed', true)
        await this.$store.commit('setQuizAnswers', {name:formID, value})
      }     
    },

    watch: {
      '$store.state.mathQuiz.quiz.index'(){
        const quizContainer = this.$refs.options
        const radioArray = quizContainer.getElementsByClassName('btn-check')

        Array.from(radioArray).forEach(btn =>{
          btn.checked = false
        })
      },
    }
  }
</script>


<style scoped>
  label{
    width: 70px;
  }
  
  .quiz{
    width: 320px;
  }
  

  @media (min-width:576px){
    .quiz{
      width: 450px;
    }
  }


  .btn-check:checked + .btn-outline-warning, 
  .btn-check:checked + .btn-outline-primary,
  .btn:hover, .btn:focus, .btn:active{
    color: var(--bs-white);
  }


 .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

</style>