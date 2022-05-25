<template>
  <div class="d-flex justify-content-end justify-content-sm-between align-items-center py-3">
    <button type="button" class="btn btn-link d-none d-sm-block my-auto hvr-grow no-highlight">
      <img src="@/assets/img/dyscalculia.png" class="img-fluid" alt="logo" width="150">
    </button>
    <div><!-- modal trigger ends here -->
      <button @click="toggleModal('signUp')" type="button" class="btn btn-outline-primary me-3 hvr-glow">Sign Up</button>
      <button @click="toggleModal('signIn')" type="button" class="btn btn-primary text-white hvr-glow">Sign In</button>
    </div>
  </div><!-- modal-links ends here -->
</template>


<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'welcome-nav',
    methods: mapMutations(['toggleModal']),
  }
</script>
