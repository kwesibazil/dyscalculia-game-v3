<template>
  <main class="container-fluid d-flex flex-column px-0 bg-light h-100 ">
    <TopNav />
    <Modal />
    <div class="d-flex flex-grow-1 mt-1 height ">
      <SideNav />
      <div class="d-flex flex-column flex-grow-1 overflow-auto h-100 pt-1">

        <router-view/>
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
  }
</script>



<style scoped>
  .height{
    min-height: 500px;
  }
</style>
