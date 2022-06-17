<template>
  <div class="instruction shadow-sm bg-white  px-2 px-sm-5 px-lg-0">
    <div class="d-flex justify-content-center align-items-center ">
      <ProgressBar class="mx-2  align-self-lg-end " />
      <div class="py-lg-1">
        <h1 class="d-none d-sm-block fs-5 fw-bold text-center">Dyscalculic Screener</h1>
        <p class="mb-0 lh-sm text-muted" >A checklist for dyscalculic adults will not provide enough information for a diagnostic assessment, but it can be very useful in promoting a better self-understanding and a pointer towards future assessment needs.</p>
      </div>
    </div>
    <p class="text-muted px-2 text-center mb-0">Below are questions that were found to be more predictive of dyscalculia (as measured by prior diagnosis)</p>
  </div>
</template>


  
<script>
import ProgressBar from '@/components/utilities/progress-bar.vue'
  export default {
    name: 'screener-instruction',
    components: {
      ProgressBar
    }
  }
</script>


<style scoped>
  .instruction :first-child{
    margin: auto;
    max-width: 700px;
  }
  @media (max-width:575px){
    .instruction p{
      padding: 5px 0;
      font-size: var(--fs-9);
    }
  }
  @media (min-width:576px){
    .instruction p{
      padding: 5px 0;
      font-size: var(--fs-8);
    }
  }

  @media (min-width:992px){
    .instruction p{
      padding: 5px 0;
      font-size: var(--fs-7);
    }
  }
</style>