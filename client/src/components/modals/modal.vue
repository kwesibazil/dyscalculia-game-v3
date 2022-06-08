<template>
  <div class="h-100">
    <div class="overlay" :class="{'overlay--active': isVisible('modal')}"></div>
      <div class="modal-box shadow bg-light px-4" :class="{'modal-box--active': isVisible('modal')}">
        <div class="d-flex flex-column my-2">
          <button @click="toggleModal()" class="btn-close align-self-end py-2" type="button" aria-label="Close"></button>
          <div class="flex-grow-1 my-3 ">
            <loginForm v-if="isVisible('currentModalForm') === 'loginForm'"/>
            <screenerForm v-else-if="isVisible('currentModalForm') === 'screenerForm'"/>
            <aptitudeForm v-else-if="isVisible('currentModalForm') === 'aptitudeForm'" /> 
            <researchForm v-else-if="isVisible('currentModalForm') === 'researchForm'" />
          </div>
        </div>
      </div><!-- modal-box ends here -->
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import loginForm from '@/components/modals/login'
  import screenerForm  from '@/components/modals/screener'
  import aptitudeForm from '@/components/modals/aptitude'
  import researchForm from '@/components/modals/research'


  export default {
    name: 'modal',
    computed: mapGetters(['isVisible']),
    methods: mapMutations(['toggleModal']),
    components:{
      loginForm,
      screenerForm,
      aptitudeForm,
      researchForm
    },
    data() {
      return {
        payload: 'modal',
      }
    },

    beforeUnmount() {
      console.log('before unmount');
      this.$store.commit('disableModal')
    },
  }
</script>

<style scoped>
  .overlay{
    top: 0;
    left: 0;
    width: 0%;
    z-index: 1;
    overflow: auto;
    position: fixed;
    transition-delay: .5s; 
  }.overlay--active{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    transition: background-color 0.2s linear;
  }.modal-box{
    left: 0;
    right: 0;
    z-index: 2;
    max-width: 90%;
    overflow:hidden; 
    max-height: 75%;
    margin-left: auto;
    margin-right: auto;   
    position: absolute;
    transform: translateY(-115%);
    min-height: 500px;
    transition: all 0.2s linear;
  }.modal-box--active{
    transition: 0.5s;
    transform: translateY(10%);
  }
  @media (min-width:576px){
    .modal-box{
      max-height: 85%;
      max-width: 490px;
    }
  }
</style>
