<template>
  <form class="bg-white h-100 p-4 mt-2 mb-3" @submit.prevent="submitForm">
    <div class="mb-5">
      <div class="input-group input-group-lg">
        <span class="inputIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person opacity-50" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
        </span>
        <input type="email" v-model="input.email" class="form-control px-5 fs-6 rounded-2" name="email" autocomplete="username" placeholder="email"  required>
      </div><!-- email input-group ends here -->
    </div><!-- email container ends here -->
    <div>
      <div class="input-group input-group-lg">
        <span class="inputIcon">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 7.022 9.217" width="16" height="16" fill="currentColor" class="bi opacity-50" >
            <path id="ic_lock_outline_24px" d="M7.511,8.022a.878.878,0,1,0-.878-.878A.88.88,0,0,0,7.511,8.022Zm2.633-3.95H9.706V3.194a2.194,2.194,0,1,0-4.389,0v.878H4.878A.88.88,0,0,0,4,4.95V9.339a.88.88,0,0,0,.878.878h5.267a.88.88,0,0,0,.878-.878V4.95A.88.88,0,0,0,10.145,4.072ZM6.151,3.194a1.361,1.361,0,0,1,2.721,0v.878H6.151Zm3.994,6.145H4.878V4.95h5.267Z" transform="translate(-4 -1)"/>
          </svg>
        </span>
        <input :type="inputType('signUp')" v-model="input.pwd"  class="form-control px-5 fs-6 rounded-2"  name="password" autocomplete="current-password"  placeholder="password" pattern="^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z]).{8,30}$" required>
        <span class="passwordIcon">
          <svg @mousedown="toggleInputType(['signUp','text'])" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash opacity-50" v-show="isHidden('signUp')"  viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
          </svg>
          <svg @mousedown="toggleInputType(['signUp','password'])"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye opacity-50" v-show="!isHidden('signUp')"  viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg>
        </span>
      </div><!-- password input-group ends here -->
      <div class="form-text text-muted fs-8">8-30 characters, with at least one number, one lowercase and one uppercase letter.</div>
    </div><!-- password container ends here -->
    <div>
      <div class="text-center">
        <button type="submit" class="btn btn-lg text-white py-1 mt-3 fs-6 btn-primary">create account</button>
      </div>
      <div class="text-center">
        <span class="text-dark fs-8 opacity-75 me-1">Already a member?</span>
        <button @click="toggleForm('signIn')" type="button" class="text-warning text-decoration-none btn btn-link btn-sm px-0 my-xl-2 no-glow">Login</button>
      </div>
      <div class="d-flex alert align-items-center py-2 mb-0 mt-2"
        :class="{'alert-danger': !alertSuccess('signUp'), 'alert-success': alertSuccess('signUp'),
                'invisible':!feedback('signUp') , 'visible': feedback('signUp')}"
        >
        <div class="flex-grow-1 text-center">
          <span class="fs-6">{{feedbackMsg('signUp')}}</span> 
        </div>
        <div class="text-end">
          <button @click="closeAlert('signUp')" class="btn p-0" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
              <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg>
          </button>
        </div>
      </div><!-- feedback ends here -->
    </div><!-- options container ends here -->
  </form><!-- signup form ends here -->
</template>


<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    name: 'signUpForm',
    data(){
      return{
        input: {
          email: null,
          pwd: null
        }
      }
    },
    computed: mapGetters(['isHidden', 'inputType', 'feedback', 'feedbackMsg', 'alertSuccess']),
    methods: {
      ...mapMutations(['toggleInputType', 'toggleForm', 'closeAlert']),
      
      /**
      * @todo sanitize user input on frontend using domPurify
      */
      submitForm(){
        this.$store.dispatch('register', this.input) 
      }
    }
  }
</script>


<style scoped>
  .input-group > .form-control:focus{
    z-index: 0;
  }
</style>