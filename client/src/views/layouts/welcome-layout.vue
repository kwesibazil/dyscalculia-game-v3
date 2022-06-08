<template>
  <div class="container-md">
    <Modal />
    <WelcomeNav />
    <div class="text-center pt-5">
      <img src="@/assets/img/lg-logo.png" class="img-fluid mx-auto" alt="dyscalculia">
      <p class="overflow-hidden my-3 mx-auto landing__p">Hello participants, we are inviting you to participate in our <strong>undergraduate research</strong>. Your participation in this study is entirely voluntary and you may refuse to particulate, or you may decide to stop your participation at any time. <strong> The data collected will remain confidential and used solely for academic purposes</strong>.</p>
      <button  @click="toggleModal('researchForm')"  class="btn btn-primary my-4 text-white hvr-glow" type="button">Learn more</button>
    </div><!-- hero text ends here -->
  </div><!-- container ends here -->
</template>

<script>
  import { mapMutations } from 'vuex'
  import Modal from '@/components/modals/modal.vue'
  import WelcomeNav from '@/components/navbars/welcome-nav.vue'

  export default {
    name: 'welcome-layout',
    components:{
      Modal,
      WelcomeNav
    },
    methods: mapMutations(['toggleModal'])
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