<template>
  <div class="d-flex flex-column h-100 px-1 px-md-4">
    
    <Instruction />

    <p class="my-4 fw-bold text-center px-2 px-md-5 fs-xs-8 fs-7">Please click on the box that best describes how you have felt and conducted yourself over the past 6 months.</p>
    <p v-if="show" class="text-center text-danger text-capitalize fs-xs-8 fs-7 ">please answer all questions</p>
    <section class="flex-grow-1 overflow-auto">
      <div id="questionsContainer" ref="questionsContainer" class="d-flex flex-column align-items-center py-sm-4 px-2 ">
      
        <Screener />

        <button @click="submitQuestion" class="btn btn-warning text-white mb-3 px-4" type="button">Submit</button>
      </div><!-- question-container ends here -->
    </section>
  </div><!-- root container ends here -->
</template>

<script>
  import Screener from '@/components/forms/screener-question'
  import Instruction from '@/components/utilities/screener-instruction'

  export default{
    name: 'screener-test',
    data(){
      return{
        show: false
      }
    },
    components: {
      Instruction,
      Screener
    },
    methods:{
      submitQuestion(){
        const scrollTo  = []
        let outstandingQuestion = null
        const questContainer = this.$refs.questionsContainer
        const questions = questContainer.getElementsByClassName('question')

        Array.from(questions).forEach(question =>{
          if(!question.hasAttribute('data-completed')){
            outstandingQuestion++
            scrollTo.push(question)
            question.classList.add('border-danger')
          } 
          else
            question.classList.remove('border-danger')
        })

        if(outstandingQuestion <= 0)
          this.$store.dispatch('screenerResult')
        else{
          this.show = true
          scrollTo.shift().scrollIntoView({behavior: "smooth", block: "center"});
        }
      }
    }
  }
</script>


<style scoped>
  .btn:focus, .btn:hover, .btn:active {
      color: white;
  }

  @media (max-width:567px){
    section::-webkit-scrollbar {
      display: none;
    }
  }

    /* width */
  section::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  section::-webkit-scrollbar-track {
    background: rgb(187, 185, 185); ;
  }

  /* Handle*/
  section::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb:hover {
    background: #ff9501c5;
  }

  /* mobile devices */
  @media (max-width:575px){
    .btn{
      padding-left:5px;
      padding-right: 5px; 
      font-size: var(--fs-7);
    }
  }

  

</style>