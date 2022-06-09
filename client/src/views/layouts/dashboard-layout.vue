<template>
  <div class="">
    <section class="mt-3 mb-1 ">
      <div class="d-flex justify-content-between ">
        <h2 class="fs-5 fw-bold">Dyscalculia</h2>
        <button type="button" class="btn btn-sm py-0 btn-warning fs-7 text-white">start test</button>
      </div>
      <div class=" d-flex my-2 align-items-center">
        <SwiperCard />
      </div>
    </section>
    <section class="pb-3 flex-grow-1">
      <h2 class="fs-5 fw-bold">Math Practice</h2>
      <p class="text-muted text-center mb-4">What do you want to practice today?</p>
      <GameCard />
    </section>
  </div>
</template>


<script>
import SwiperCard from '@/components/cards/swiper-card.vue'
import GameCard from '@/components/cards/game-card.vue'
  export default {
    name: 'dashboard-layout',
    components: {
      GameCard,
      SwiperCard
    },
    created() {
      this.$store.dispatch('fetchTestimonies')
    },
  }
</script>
