<template>
  <div class="px-4 py-2" >
    <section class="my-1">
      <div class="d-flex justify-content-between ">
        <h2 class="fs-5 fw-bold">Dyscalculia</h2>
        <button  @click="toggleModal('screenerForm')" class="btn btn-sm py-0 btn-warning fs-7 me-1 text-white hvr-pulse-grow" type="button">screener</button>
      </div>
      <div class=" d-flex my-2 align-items-center">
        <SwiperCard />
      </div>
    </section>
    <section class="d-flex flex-column pb-3 mt-2 pt-2">
      <div class="d-flex justify-content-between px-1 mb-3 mb-sm-0">
        <h2 class="fs-5 fw-bold mb-lg-0">Math Practice</h2>
        <button  @click="toggleModal('aptitudeForm')" class="btn btn-sm  py-1 btn-primary fs-7 text-white hvr-pulse-grow" type="button">Math quiz</button>
      </div>
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
    }
  }
</script>

<!-- <button  @click="toggleModal('aptitudeForm')" class=" position-relative end-0 py-1 me-4 btn btn-sm  btn-primary fs-7 ms-4 me-1 text-white hvr-pulse-grow" type="button">Math quiz</button> -->