<template>
  <div class="landingModal shadow bg-light px-3" :class="{'landingModal--active':isVisible('landingModal')}">
    <div class="d-flex align-items-center py-3">
      <div class="flex-grow-1 text-center">
        <h1 class="fs-6 fw-bold mb-0">Please login to continue</h1>
      </div>
      <div class=" text-end">
        <button @click="toggleModal" class="btn p-0 " type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
          </svg>
        </button>
      </div>
    </div><!-- flexbox ends here -->
    <div class="bg-white">
      <div class="d-flex">
        <div class="d-grid w-50">
          <button class="btn btn-outline-secondary rounded-0 no-highlight" type="button">Sign Up</button>
        </div>
        <div class="d-grid w-50">
          <button class="btn btn-primary text-white rounded-0 no-highlight" type="button">Sign In</button>
        </div>
      </div><!-- flexbox ends here -->

      

    </div><!-- form container ends here -->
  </div><!-- container ends here -->
</template>


<script>
  import { mapGetters, mapMutations  } from 'vuex'

  export default {
    name: 'LandingModal',
    computed: mapGetters(['isVisible']),
    methods: mapMutations(['toggleModal'])
  }

</script>


<style scoped>
  .landingModal{
    left: 0;
    right: 0;
    height: 75%;
    /* max-height: 75%; */
    z-index: 17;
    max-width: 90%;
    overflow:hidden; 
    margin-left: auto;
    margin-right: auto;   
    position: absolute;
    transform: translateY(-105%);
    transition: all 0.2s linear;
  }.landingModal--active{
    transition: 0.5s;
    transform: translateY(10%);
  }
  @media (min-width:576px){
    .landingModal{
      max-width: 490px;
    }
  }
</style>