<template>
  <header class="shadow-sm">
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-2">
      <div class="container-fluid">
        <div class="d-flex justify-content-between justify-content-lg-start col">
          <button @click="toggleSideNav" class="navbar-toggle me-3" type="button">
            <span class="navbar-toggler-icon "></span>
          </button>
          <router-link to="/" class="my-auto hvr-grow">
            <img  src="@/assets/img/sm-logo.png" class="img-fluid" alt="dyscalculia" width="28">
          </router-link>
        </div>
        <div class="text-center d-none d-lg-block col hvr-wobble-horizontal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1 bi bi-calendar-event fill-orange" viewBox="0 0 16 16">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
          <span class="fs-7 text-muted">{{today}}</span>
        </div>
        <div class="d-flex align-items-center justify-content-end col mx-2">
          <h3 class="d-none d-sm-block fs-7 m-0 text-muted ">welcome</h3>
          <img  src="@/assets/img/user-profile.jpg" class="rounded-circle border border-secondary ms-2 " alt="dyscalculia" width="31" height="25" >
        </div>
      </div>
    </nav><!-- nav container ends here -->
  </header><!-- header ends here -->
</template>




<script>
import {mapMutations} from 'vuex'

export default{
  name: 'TopNav',
  methods: mapMutations(['toggleSideNav']),
  data(){
    return{
      today: new Date().toDateString()
    }
  },
}
</script>

<style scoped>
.user-image{
  vertical-align: middle;
  width: 50px;
  height: 50px;
}
.navbar-toggle{
    padding: 0.188rem 0.313rem;
    font-size: 1rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow .15s ease-in-out;
  }
</style>
