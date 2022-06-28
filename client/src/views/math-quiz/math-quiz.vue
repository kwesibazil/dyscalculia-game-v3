<template>
  <div class="d-flex flex-column h-100 px-1 px-md-4">
    <section class="shadow-sm bg-white d-flex flex-column justify-content-center align-items-center py-2">
      <h1 class="fs-5 fw-bold text-center mt-1">Aptitude test</h1>
      <div class=" w-75  ">
        <ProgressBar />
      </div>
    </section>
    <section class="d-flex flex-column justify-content-center mt-4">
      <h2 class="fw-bold text-center px-2 px-md-5 fs-5 text-muted mb-1">{{clusterName}}</h2>
      <p :class="{ invisible: !showQuizErr }" class="text-center text-danger text-capitalize fs-xs-8 fs-7 ">Please Answer questions</p>
      
      <div id="quizContainer" ref="quizContainer" >
        <Quiz />
      </div>

      <div class="d-flex my-4 justify-content-center">
        <div>
          <button v-if="getQuizValue(this.cancelBtn)" @click="cancelQuiz"  class="btn btn-danger mb-3 px-3 me-4" type="button">Cancel</button>
          <button v-else @click="updateQuiz('back')" class="btn btn-outline-secondary mb-3 px-4 me-4" type="button">Back</button>
        </div>
        <div>
          <button v-if="getQuizValue(this.submitBtn)" @click="submitQuiz"  class="btn btn-warning text-white mb-3 px-4" type="button">Submit</button>
          <button v-else @click="updateQuiz('next')" class="btn btn-dark  mb-3 px-4" type="button">Next</button>
        </div>
      </div>
    </section>

  </div><!-- root container ends here -->
</template>


<script>
  import { mapGetters, mapMutations} from 'vuex'
  import Quiz from '@/components/forms/math-question.vue'
  import ProgressBar from '@/components/utilities/math-progress-bar'


  export default{
    name: 'math-test',
    data(){
      return{
        mentalMath: 2,                      //cut off point [if mental math = 2 everything 2 and over is mental math]
        mathFluency: 1,
        appliedProblems:3,
        clusterName: 'Computation Skills',
        submitBtn:{object: 'btn', property: 'submit'},
        cancelBtn:{object: 'btn', property: 'cancel'}
      }
    },
    computed: mapGetters(['getQuizValue', 'showQuizErr']),
    components:{
      ProgressBar,
      Quiz
    },
    methods:{
      ...mapMutations(['updateQuizIndex', 'submitQuiz']),

      cancelQuiz(){
        this.$router.push({name:'dashboard'})
      },  

      async updateQuiz(btn){
        await this.$store.commit('updateQuizIndex', btn)
        const quiz = await this.$store.state.mathQuiz.quiz
        const index = quiz.index

        if(index < this.mathFluency){
          this.clusterName = 'Computation Skills'
          this.$store.commit('updateAptitudeProgressBar', {object:'completed', property:'mathFluency', value: false})
        }
        else if(index >= this.mathFluency && index < this.mentalMath){
          this.clusterName = 'Math Fluency'
          this.$store.commit('updateAptitudeProgressBar', {object:'completed', property:'mathFluency', value: true})
          this.$store.commit('updateAptitudeProgressBar', {object:'completed', property:'mentalMath', value: false})
        }
        else if(index >=this.mentalMath && index < this.appliedProblems){
          this.clusterName = 'Mental Math'
          this.$store.commit('updateAptitudeProgressBar', {object:'completed', property:'mentalMath', value: true})
          this.$store.commit('updateAptitudeProgressBar', {object:'completed', property:'appliedProblems', value: false})
        }else{
          this.clusterName = 'Applied Problems'
          this.$store.commit('updateAptitudeProgressBar', {object:'completed', property:'appliedProblems', value: true})
        }
      }
    }
  }
</script>




