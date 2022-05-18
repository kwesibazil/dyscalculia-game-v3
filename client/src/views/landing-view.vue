<template>
  <div class="container-md h-100">
    <ModalBox />
    <LandingModal />
    <div class="d-flex justify-content-end justify-content-sm-between align-items-center py-3">
      <button type="button" class="btn btn-link d-none d-sm-block my-auto hvr-grow no-highlight">
        <img src="@/assets/img/dyscalculia.png" class="img-fluid" alt="logo" width="150">
      </button>
      <div><!-- modal trigger -->
        <button @click="toggleModal" type="button" class="btn btn-outline-primary me-3 hvr-glow">Sign Up</button>
        <button @click="toggleModal" type="button" class="btn btn-primary text-white hvr-glow">Sign In</button>
      </div>
    </div><!-- modal-links ends here -->
    <div class="text-center pt-5">
      <img src="@/assets/img/lg-logo.png" class="img-fluid mx-auto" alt="dyscalculia">
      <p class="overflow-hidden my-3 mx-auto landing__p ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aperiam eum placeat veniam amet excepturi voluptates libero exercitationem quam molestias? Distinctio tempora incidunt dolor corrupti nam delectus culpa. Fugiat, corporis! Quas odit ipsam eligendi voluptatum, perferendis modi laboriosam, mollitia ex iste qui voluptate.</p>
      <button type="button" class="btn btn-primary my-4 text-white hvr-glow ">Learn more</button>
    </div><!-- hero text ends here -->
  </div><!-- container ends here -->
</template>

<script>
  import { mapMutations } from 'vuex'
  import ModalBox from '@/components/modals/modal-box.vue'
  import LandingModal from '@/components/modals/signin-&-signup.vue'

  export default {
    name: 'LandingPage',
    methods: mapMutations(['toggleModal']),
    components:{
      LandingModal,
      ModalBox
    }
  }
</script>


<style scoped>
 .landing__p{
    max-height: 145px;
    width: 90%
  }

  @media (min-width:576px){
    .landing__p{
      width: 70%;
    }
  }
</style>