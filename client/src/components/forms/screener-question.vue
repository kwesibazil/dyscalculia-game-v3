<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <div  v-for="(content, index) in getState('questions').slice(this.start, this.end)" :key="index" class="question d-inline-block border shadow-sm bg-white rounded-3 p-3 py-4 mb-4">
      <div class="d-flex flex-column justify-content-center">
        <div class="d-flex ">
          <h1 class="fs-6 fw-bold mb-0 ">{{index+1}}.</h1>
          <p class="px-2 fs-xs-7">{{content.title}}</p>
        </div>
        <div>
          <form @click="test" :id="index" class="likertScale d-flex justify-content-between">
            <div class="position-relative ">
              <input :id="never+index" value="1" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-danger " :for="never+index">Never</label>
            </div>
            <div class="position-relative ">
              <input :id="rarely+index" value="2" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-warning " :for="rarely+index">Rarely</label>
            </div>
            <div class="position-relative ">
              <input :id="sometimes+index" value="3" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-dark " :for="sometimes+index">Sometimes</label>
            </div>
            <div class="position-relative ">
              <input :id="often+index" value="4" class="btn-check" name="likertScale" type="radio" autocomplete="off">
              <label class="btn btn-outline-primary " :for="often+index">Often</label>
            </div>
          </form>
      
        </div>
      </div>
    </div>
    
    
    <!-- questions ends here -->
  </div><!-- root container ends here -->
</template>


<script>
  import { mapGetters, mapMutations} from 'vuex'

  export default{
    name: 'screener-question',
    computed: mapGetters(['getState']),

    methods: {
        test(e){
          console.log(e.target);
        }
      //mapMutations(['test'])
    },
    data(){
      return{
        end: 12,
        start: 0,
        often: 40,
        never: 10,
        rarely: 20,
        sometimes: 30,
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