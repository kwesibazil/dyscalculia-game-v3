<template>
  <div class="d-flex flex-column h-100 px-1 px-md-4">
    
    <Instruction />

    <p class="my-4  fw-bold text-center px-2 mb-2 px-md-5 fs-xs-8 ">Please click on the box that best describes how you have felt and conducted yourself over the past 6 months.</p>
    <section class="flex-grow-1 overflow-auto">
      <div class="questions-container d-flex flex-column align-items-center py-sm-4 px-2 ">
      
        <Screener />
        
      </div><!-- question-container ends here -->
    </section>
  </div><!-- root container ends here -->
</template>

<script>
  import Screener from '@/components/forms/screener-question'
  import Instruction from '@/components/utilities/screener-instruction'

  export default{
    name: 'screener-test',
    components: {
      Instruction,
      Screener
    },
    created(){
      this.$store.dispatch('fetchQuestions')
    },
  }
</script>


<style scoped>
  .btn:focus, .btn:hover, .btn:active {
      color: white
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