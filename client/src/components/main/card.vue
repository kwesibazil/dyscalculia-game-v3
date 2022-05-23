<template>
  <swiper class="p-2 " :modules="modules" :slidesPerView="2.5" :spaceBetween="30"  
    :slideToClickedSlide = "true" 
    :pagination="{dynamicBullets: true, clickable: true,}"
    :breakpoints="{
      '0': { slidesPerView: 1, spaceBetween: 10,},
      '576': {slidesPerView: 1.5,spaceBetween: 10,},
      '768': { slidesPerView: 1.5, spaceBetween: 20,},
      '992': { slidesPerView: 2.2, spaceBetween: 20,},
    }">
    <swiper-slide v-for="(slideContent, index) in getCards.slice(0, 6)" :key="index" :virtualIndex="index">
        <div class="card border border-2 border-secondary text-white">
          <img src="@/assets/img/card00.jpg" class="card-img" alt="..."  style="max-height: 220px; min-height: 190px;" >
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>  
    </swiper-slide>
  </swiper>
</template>


<script>
  import { mapGetters} from 'vuex'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/virtual';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
    computed: mapGetters(['getCards'])
  };
</script>

<style scoped>
  .swiper {
    width: 100%;
    max-height: 240px;
  }
  .card-img{
    /*  */
  }
</style>