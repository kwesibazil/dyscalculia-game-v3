<template>
  <div class="">
    <h1 class="fs-6 fw-bold mb-0 text-center">Please login to continue</h1>
    <div class="bg-white border border-top-0 my-2 ">
      <div class="d-flex">
        <div class="d-grid w-50">
          <button @click="toggleLoginForm('signUp')" :class="{'btn--current':!isHidden({object:'loginForm', property:'active'})}" class="btn btn-dark opacity-25 rounded-0 py-3 no-highlight" type="button">Sign Up</button>
        </div>
        <div class="d-grid w-50">
          <button @click="toggleLoginForm('signIn')" :class="{'btn--current':isHidden({object:'loginForm', property:'active'})}"  class="btn btn-dark opacity-25 rounded-0 py-3 no-highlight" type="button">Sign In</button>
        </div>
      </div><!-- flexbox ends here -->
        <SignIn v-if="isHidden(payload) === 'signIn'"/>
        <SignUp v-else />
    </div><!-- form container ends here -->
  </div><!-- container ends here -->
</template>


<script>
  import { mapGetters, mapMutations } from 'vuex'
  import SignIn from '@/components/forms/signin.vue'
  import SignUp from '@/components/forms/signup.vue'

  export default {
    name: 'loginForm',
    data(){
      return{
        payload: { object: 'loginForm', property:'current'}
      }
    },
    computed: mapGetters(['isHidden']),
    methods: mapMutations(['toggleLoginForm']),
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
    transition: all .2s;
  } 
</style>