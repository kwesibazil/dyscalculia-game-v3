<template>
  <div class="d-flex flex-column px-2 px-md-4 h-100 ">
    <section class="my-3 ">
      <div class="d-flex justify-content-between">
        <h2 class="fs-5 fw-bold">Overview</h2>
        <button type="button" class="btn btn-sm py-0 btn-orange fs-7">start test</button>
      </div>
      <div class="card-container d-flex my-2 align-items-center">
        <Card />
      </div>
    </section>
    <section class="py-3 flex-grow-1 border">
      <h2 class="fs-5 fw-bold">Math Practice</h2>
      <p class="text-muted text-center">What do you want to practice today?</p>
    </section>
  </div>
</template>


<script>
import Card from '@/components/main/card.vue'

  export default {
    name: 'Layout',
    components: {
      Card
    },
  }
</script>
