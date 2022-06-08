<template>
  <main class="container-fluid d-flex flex-column px-0 bg-light h-100">
    <TopNav />
    <div class="d-flex flex-grow-1 mt-1 height ">
      <SideNav class=""/>
      <div class="d-flex flex-column px-3 flex-grow-1 overflow-auto px-md-4 h-100">

        <router-view/>
      </div>
    </div>
  </main>
</template>


<script>
  import TopNav from '@/components/navbars/top-nav.vue'
  import SideNav from '@/components/navbars/side-nav.vue'

  export default {
    name: 'main-layout',
    components: {
      SideNav,
      TopNav
    },
  }
</script>



<style scoped>
  .height{
    min-height: 500px;
  }
</style>
