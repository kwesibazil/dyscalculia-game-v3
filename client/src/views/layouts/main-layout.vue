<template>
  <main class="container-fluid d-flex flex-column px-0 bg-light h-100 ">
    <TopNav />
    <Modal />
    <div class="d-flex flex-grow-1 mt-1 height ">
      <SideNav />
      <div class="d-flex flex-column flex-grow-1 overflow-auto h-100 pt-1">

        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>

      </div>
    </div>
  </main>
</template>


<script>
  import Modal from '@/components/modals/modal.vue'
  import TopNav from '@/components/navbars/top-nav.vue'
  import SideNav from '@/components/navbars/side-nav.vue'

  export default {
    name: 'main-layout',
    components: {
      Modal,
      TopNav,
      SideNav
    },

    mounted() {
      this.$store.dispatch('fetchTestimonies')
      this.$store.dispatch('fetchQuiz')
      this.$store.dispatch('fetchQuestions')
  },
  }
</script>



<style scoped>
  .height{
    min-height: 500px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
