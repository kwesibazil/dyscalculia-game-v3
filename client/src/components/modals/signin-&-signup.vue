<template>
  <div class="landingModal shadow bg-light px-4" :class="{'landingModal--active':isVisible('landingModal')}">
    <div class="d-flex align-items-center py-4">
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
      </div><!-- close button ends here -->
    </div><!-- flexbox ends here -->
    <div class="bg-white border border-top-0 mb-5">
      <div class="d-flex">
        <div class="d-grid w-50">
          <button @click="toggleForm('signIn')" :class="{'btn--current':isVisible('signIn')}" class="btn btn-dark opacity-25 rounded-0 py-3 no-highlight" type="button">Sign In</button>
        </div>
        <div class="d-grid w-50">
          <button @click="toggleForm('signUp')"  :class="{'btn--current':!isVisible('signIn')}" class="btn btn-dark opacity-25 rounded-0 py-3 no-highlight" type="button">Sign Up</button>
        </div>
      </div><!-- flexbox ends here -->

      <SignIn v-if="isVisible('signIn')"/>
      <SignUp v-else />

    </div><!-- form container ends here -->
  </div><!-- container ends here -->
</template>
btn--current


<script>
  import { mapGetters, mapMutations  } from 'vuex'
  import SignIn from '@/components/forms/signin.vue'
  import SignUp from '@/components/forms/signup.vue'

  export default {
    name: 'LandingModal',
    computed: mapGetters(['isVisible']),
    methods: mapMutations(['toggleModal', 'toggleForm']),
    components:{
      SignIn,
      SignUp
    },
  }

</script>


<style scoped>
  .btn--current {
    border: none;
    color: black;
    opacity: 1 !important;
    background-color: transparent;
    border-top: 2px solid var(--primary);
  }

  .landingModal{
    left: 0;
    right: 0;
    min-height: 500px;
    max-height: 85%;
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