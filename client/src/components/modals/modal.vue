<template>
  <transition duration="550" name="nested">
    <div v-if="isVisible('modal')" class="overlay">
      <div class="modal d-flex flex-column shadow bg-light px-4  ">
        <button @click="toggleModal()" class="btn-close align-self-end py-2" type="button" aria-label="Close"></button>
        <div class="flex-grow-1 my-3 ">
          <loginForm v-if="isVisible('currentModalForm') === 'loginForm'"/>
          <screenerForm v-else-if="isVisible('currentModalForm') === 'screenerForm'"/>
          <aptitudeForm v-else-if="isVisible('currentModalForm') === 'aptitudeForm'" /> 
          <researchForm v-else-if="isVisible('currentModalForm') === 'researchForm'"/>
          <redirectSuccess v-else-if="isVisible('currentModalForm') === 'success'"/>

        </div><!-- modal body ends here -->
      </div><!-- modal ends here -->
    </div><!-- overlay ends here -->
  </transition>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import loginForm from '@/components/modals/login'
  import screenerForm  from '@/components/modals/screener'
  import aptitudeForm from '@/components/modals/aptitude'
  import researchForm from '@/components/modals/research'
  import redirectSuccess from '@/components/modals/redirect-success'


  export default {
    name: 'modal',
    computed: mapGetters(['isVisible']),
    methods: mapMutations(['toggleModal']),
    components:{
      loginForm,
      screenerForm,
      aptitudeForm,
      researchForm,
      redirectSuccess
    },
  }
</script> 

<style scoped>
  .overlay, .modal{
    left:0;
    overflow: hidden;
  }
  .overlay{
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal { 
    top: 5%;
    z-index: 2;
    max-width: 90%;
    max-height: 75%;
    min-height: 500px; 
    position: relative;
    margin-left: auto;
    margin-right: auto
  }

  @media (min-width:576px){
    .modal{
      max-height: 85%;
      max-width: 490px;
    }
  }

  .nested-enter-active, .nested-leave-active {
    transition: all .3s ease-in-out;
  }.nested-enter-from, .nested-leave-to {
    opacity: 0;
  }

  /* delay leave of parent element and  delay enter of nested element */ 
  .nested-leave-active, .nested-enter-active .modal{ 
    transition-delay: 0.25s;
  }.nested-enter-active .modal, .nested-leave-active .modal { /* transition nested elements */
    transition: all 0.3s ease-in-out;
  }.nested-enter-from .modal, .nested-leave-to .modal {
    transform: translateY(-115%);
    opacity: .1;
  }

</style>
