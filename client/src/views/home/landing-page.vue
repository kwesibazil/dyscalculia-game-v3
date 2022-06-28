<template>
  <div class="container-md">
    <Modal />
    <WelcomeNav />
    <div class="text-center pt-5">
      <img src="@/assets/img/lg-logo.png" class="img-fluid mx-auto" alt="dyscalculia">
      <p class="overflow-hidden my-3 mx-auto landing__p">Hello participants, we are inviting you to participate 
        in our <strong>undergraduate research</strong> on Dyscalculia and Game-Based Learning. We thank you in advance for your participation. Please be advised that the data collected will remain confidential and used <strong>solely for academic purposes</strong>.</p>
      <button @click="toggleModal('researchForm')" class="btn btn-primary my-4 text-white hvr-glow" type="button">Learn more</button>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Modal from '@/components/modals/modal.vue'
  import WelcomeNav from '@/components/navbars/welcome-nav.vue'

  export default{
    name: 'landing-page',
    methods: mapMutations(['toggleModal']),
    components:{
      Modal,
      WelcomeNav,
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