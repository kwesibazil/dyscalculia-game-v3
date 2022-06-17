<template>
  <div class="px-4" >
    <section class="my-1">
      <div class="d-flex justify-content-between ">
        <h2 class="fs-5 fw-bold">Dyscalculia</h2>
        <button  @click="toggleModal('screenerForm')" class="btn btn-sm py-0 btn-warning fs-7 text-white hvr-pulse-grow" type="button">start test</button>
      </div>
      <div class=" d-flex my-2 align-items-center">
        <SwiperCard />
      </div>
    </section>
    <section class="pb-3 flex-grow-1">
      <h2 class="fs-5 fw-bold mb-lg-0">Math Practice</h2>
      <p class="text-muted text-center mb-3 py-">What do you want to practice today?</p>
      <GameCard />
    </section>
  </div><!-- root container ends here -->
</template>


<script>
  import { mapMutations } from 'vuex'
  import SwiperCard from '@/components/cards/swiper-card.vue'
  import GameCard from '@/components/cards/game-card.vue'
  export default {
    name: 'dashboard-layout',
    methods: mapMutations(['toggleModal']),
    components: {
      GameCard,
      SwiperCard
    },
    created() {
      this.$store.dispatch('fetchTestimonies')
    },
  }
</script>
