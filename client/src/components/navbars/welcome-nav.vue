<template>
  <nav class="d-flex justify-content-end justify-content-sm-between align-items-center py-3">
    <button type="button" class="btn btn-link d-none d-sm-block my-auto hvr-grow no-highlight">
      <img src="@/assets/img/dyscalculia.png" class="img-fluid" alt="logo" width="150">
    </button>
    <div>
      <button @click="showForm('signUp')"  type="button" class="btn btn-outline-primary me-3 hvr-glow">Sign Up</button>
      <button @click="showForm('signIn')" type="button" class="btn btn-primary text-white hvr-glow">Sign In</button>
    </div>
  </nav>
</template>


<script>
  export default {
    name: 'welcome-nav',
    methods: {
      showForm(form){
        this.$store.commit('toggleModal','loginForm')
        this.$store.commit('toggleLoginForm', form)
      }
    },
  }
</script>
