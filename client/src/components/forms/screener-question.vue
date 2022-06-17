<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <div  v-for="(content, index) in getQuestion('questions').slice(0, 12)" :key="index" class="question d-inline-block border shadow-sm bg-white rounded-3 p-3 py-4 mb-5">
      <div class="d-flex flex-column justify-content-center">
        <div class="d-flex ">
          <h1 class="fs-6 fw-bold mb-0 ">{{index+1}}.</h1>
          <p class="px-2 fs-xs-7">{{content.title}}</p>
        </div>
        <div>
          <form :id="content.name" class="likertScale d-flex justify-content-between">
            <div class="position-relative ">
              <input @click="answer" :id="never+index" value="1" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-danger" :for="never+index">Never</label>
            </div>
            <div class="position-relative ">
              <input @click="answer" :id="rarely+index" value="2" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-warning " :for="rarely+index">Rarely</label>
            </div>
            <div class="position-relative ">
              <input @click="answer" :id="sometimes+index" value="3" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-dark " :for="sometimes+index">Sometimes</label>
            </div>
            <div class="position-relative ">
              <input @click="answer" :id="often+index" value="4" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-primary " :for="often+index">Often</label>
            </div>
          </form>
      
        </div>
      </div>
    </div><!-- questions ends here -->
  </div><!-- root container ends here -->
</template>


<script>
  import { mapGetters} from 'vuex'

  export default{
    name: 'screener-question',
    computed: mapGetters(['getQuestion']),
    data(){
      return{
        end: 12,
        start: 0,
        often: (new Date()).getTime() + Math.floor(Math.random() * 510),        //generates random id form
        never: (new Date()).getTime() + Math.floor(Math.random() * 5020),       //generates random id form
        rarely: (new Date()).getTime() + Math.floor(Math.random() * 7000),      //generates random id form
        sometimes: (new Date()).getTime() + Math.floor(Math.random() *800)      //generates random id form
      }
    },
    methods: {
      answer(e){
        const target = e.target
        const form =  target.closest('form')
        const value = e.target.getAttribute('value')
        const container = e.target.closest('.question')

        const formID = form.getAttribute('id')
        container.setAttribute('data-completed', true)

        this.$store.commit('setAnswers', {name:formID, value})
        this.$store.commit('progress')
      }     
    },
  }
</script>


<style scoped>
  .question{
    width: 90%;
  }

  .btn-check:checked + .btn-outline-warning, 
  .btn-check:checked + .btn-outline-primary,
  .btn:hover, .btn:focus, .btn:active{
    color: var(--bs-white);
  }

  @media (max-width:567px){
    .question{
      width: 95%;
    }
    .btn{
      padding: 5px;
      margin-right: 2px;
    }
  }


</style>