<template>
  <div class="shadow bg-white my-2 px-2 px-sm-5 px-md-1">
    <div class="intro-container my-lg-2">
      <div class="d-flex justify-content-center align-items-center my-2">
        <ProgressBar class="mx-2" />
        <div class="d-flex flex-column intro ">
          <h1 class="d-none d-sm-block fs-4  fw-bold text-center">Dyscalculic Screener</h1>
          <p class="mb-0" >A checklist for dyscalculic adults will not provide enough information for a diagnostic assessment, but it can be very useful in promoting a better self-understanding and a pointer towards future assessment needs.</p>
        </div><!-- intro ends here -->
      </div><!-- flexbox ends here -->
      <p class="below text-muted">Below are the questions that were found to be more predictive of dyscalculia (as measured by prior diagnosis)</p>
    </div><!-- intro-container ends here -->
  </div><!-- container ends here -->
</template>

<script>
  import ProgressBar from '@/components/utilities/progress-bar.vue'
  export default{
    name: 'screener-test',
    components: {
      ProgressBar
    }
  }
</script>


<style scoped>

@media (max-width:435px){
  .intro p {
    font-size: var(--fs-9);
  }
  .below{
    margin-left: 25px;
    font-size: var(--fs-9);
  }
}

@media (min-width:436px){
  .intro p {
    font-size: var(--fs-8);
  }
  .below{
    margin-left: 25px;
    font-size: var(--fs-8);
  }
}

@media (min-width:576px){
  .intro h1{
    font-size: var(--fs-5);
  }
  .intro p {
    font-size: var(--fs-8);
  }
  
  .below{
    margin-left: 25px;
    font-size: var(--fs-8);
  }
}


@media (min-width:768px){
  .intro-container{
    width: 85%;
    margin: 0 auto;
  }
  .intro p {
    font-size: var(--fs-7);
  }
  .below{
    margin-left: 25px;
    font-size: var(--fs-7);
  }
}

@media (min-width:992px){
  .intro-container{
    width: 75%;
    margin: 0 auto;
  }
  .below{
    text-align: center;
    margin: 0 auto;
    font-size: var(--fs-7);
  }
}


</style>