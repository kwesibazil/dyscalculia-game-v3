<template>
  <div class="h-100">
    <div @click="toggleSideNav" class="modal-box" :class="{ 'modal-box--collapse': !isVisible('sideNav')}"></div><!-- REMOVE THIS AND USE THE MODAL COMPONENT -->
    
    <div class="sideNav shadow d-flex justify-content-center bg-white h-100" :class="{'sideNav--collapse': !isVisible('sideNav')}">
      <nav class="navbar navbar-light py-0 h-100 px-xl-3 ">
        <div class="d-flex flex-column justify-content-between h-100">

          <div @click="currentLink"  id="sideNavLinks" ref="sideNavLinks" class="active navbar-nav d-flex flex-column justify-content-between align-items-start h-60">
            <router-link @click="toggleSideNav" class="nav-link d-flex  align-items-center justify-content-start rounded-2 px-6 py-2  mt-3 hvr-shadow hvr-icon-pulse-shrink" aria-current="page" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill me-2 hvr-icon" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
              </svg>
              <span class="">Home</span>
            </router-link>
            <router-link @click="toggleSideNav" class="nav-link d-flex align-items-center justify-content-start rounded-2 px-6 py-2 hvr-shadow mt-1 hvr-icon-pulse-shrink" to="/screener">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-minus-fill me-2 hvr-icon" viewBox="0 0 16 16">
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1Z"/>
              </svg>
              <span class="">Screener</span> 
            </router-link>
            <router-link @click="toggleSideNav" class="nav-link d-flex align-items-center justify-content-start rounded-2 px-6 py-2 hvr-shadow mt-1 hvr-icon-spin" to="/games">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-controller me-2 hvr-icon" viewBox="0 0 16 16">
                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
              </svg>
              <span class="">Games</span> 
            </router-link>
            <router-link @click="toggleSideNav" class="nav-link d-flex align-items-center justify-content-start rounded-2 px-6 py-2 hvr-shadow mt-1 hvr-icon-pulse-shrink" to="/math-quiz">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-diamond-fill me-2 hvr-icon" viewBox="0 0 16 16">
                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
              </svg>
              <span class="">Math Quiz</span> 
            </router-link>
            <router-link @click="toggleSideNav" class="nav-link d-flex align-items-center justify-content-start rounded-2 px-6 py-2 hvr-shadow mt-1 hvr-icon-pulse-shrink" to="/information">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill me-2 hvr-icon" viewBox="0 0 16 16">
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
              <span class="">Information</span> 
            </router-link>
            <router-link @click="toggleSideNav" class="nav-link d-flex align-items-center justify-content-start rounded-2 px-6 py-2 hvr-shadow mt-1 hvr-icon-pulse-shrink" to="/statistics">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill me-2 hvr-icon" viewBox="0 0 16 16">
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
              </svg>
              <span class="">Statistics</span> 
            </router-link>
          </div><!-- navbar-nav ends here -->

          <button @click="logout" class="hvr-icon-back btn btn-danger logout--btn mx-auto rounded" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right me-2 fill-white hvr-icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
            <span class="text-white">logout</span> 
          </button>
        </div>
      </nav>
    </div><!-- sideNav ends here -->
  </div><!-- root container ends here -->
</template>


<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'SideNav',
    computed: mapGetters(['isVisible']),
    methods: {
      ...mapMutations(['toggleSideNav']),

      logout(){
        this.$store.dispatch('logout')
      },

      /**
       * @summary removes css active class and adds it to the current link clicked
       * @note  works as intended but somehow vue-router is causing issues -- only works on router-link-exact-active
       */
      currentLink(e) {
        const target = e.target                       //due to the html structure  -->(router-link > svg | span) the target can be a span/svg/path/a-href element
        const current = target.closest('.nav-link')   //this gets the nearest anchor tag so it save the hassle of having to check the parent or grandparent
        const sideNavLinks = this.$refs.sideNavLinks
        const routerLinks = sideNavLinks.getElementsByClassName('nav-link')
    
        Array.from(routerLinks).forEach(link => {
          link.classList.remove('active')
          link.removeAttribute('aria-current');
          
          if(link === current ){
            link.classList.toggle('active')
            link.ariaCurrent = "page"
          }
        });
      }
    }
  }
</script>

<style scoped>
  .logout--btn{
    padding: .75rem 3rem;
    display: flex;
    margin-bottom: .25rem ;
    align-items: center;
    justify-items: center;
    background-color: rgb(197, 9, 9);
  }

  /**overrides bootstrap default styles */
  .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.active:hover{
    color: var(--bs-warning);
  }
  .nav-link{
    width: 216.047px;
  }.navbar-light .navbar-nav .nav-link:hover{
      color: var(--bs-primary);
    background-color: rgba(212, 207, 207, 0.103);
  }

  
  /** Web App transition */
  @media (min-width:768px){
    .sideNav{
      width:auto;
      max-width:250px; 
      margin-right: .5rem;
      z-index: 3;
      overflow:hidden;    
      transition: all 0.4s linear; 
    }.sideNav--collapse{
      max-width:0;
      margin-right: 0;
      transition: all 0.5s;
      /* transform: translate(0); */
    }
  }

  @media (max-width:767px){
    .modal-box{
      top: 1;
      left: 0;
      width: 0%;
      z-index: 10;
      overflow: auto;
      position: fixed;
    }.modal-box--collapse{
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.4);
      transition: background-color 0.5s linear;
    }.sideNav{
      top: 1;
      z-index: 13;
      width: 210px;
      height: calc(100vh - 52px) !important;
      position: absolute;
      transform: translate(-100%);
      transition: all 0.3s linear;
    }.sideNav--collapse{
      transition: 0.5s;
      transform: translate(0);
    }
  }
</style>