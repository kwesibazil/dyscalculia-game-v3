<template>
  <div class="container-fluid d-flex flex-column px-0 bg-light h-100">
    <TopNav />
    <div class="d-flex flex-grow-1 mt-1 height ">
      <SideNav class=""/>
      <Layout class="flex-grow-1 h-100 overflow-auto"/>
    </div>
  </div>
</template>


<script>
  import TopNav from '@/components/navbars/TopNav.vue'
  import SideNav from '@/components/navbars/SideNav.vue'
  import Layout from '@/components/main/layout.vue'

  export default {
    name: 'dashboard',
    created() {
      this.$store.dispatch('fetchCards')
    },
    components: {
      Layout,
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
