<template>
  <swiper class="p-2 " :modules="modules" :slidesPerView="2.5" :spaceBetween="30"  
    :slideToClickedSlide = "true" 
    :pagination="{dynamicBullets: true, clickable: true,}"
    :breakpoints="{
      '0': { slidesPerView: 1, spaceBetween: 10,},
      '576': {slidesPerView: 1.5,spaceBetween: 10,},
      '768': { slidesPerView: 1.5, spaceBetween: 20,},
      '992': { slidesPerView: 2.5, spaceBetween: 20,},
    }">
    <swiper-slide v-for="(slideContent, index) in getCards.slice(0, 6)" :key="index" :virtualIndex="index">
        <div class="card border border-2 border-secondary text-white">
          <img src="@/assets/img/card01.jpg" class="card-img" alt="card"  style="max-height: 200px; min-height: 190px;" >
          <div class="card-img-overlay">
            <h5 class="card-title  fw-bold mt-3 text-truncate ">{{slideContent.title}}</h5>
            <p class="card-text fst-italic fs-7">{{slideContent.text}}</p>
            <router-link :to="slideContent.urlToArticle" class="btn btn-sm btn-light">Read more</router-link>
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
    name: 'swiper-card',
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
    max-height: 220px;
  }
  .card-img{
    filter: blur(1.5px);
  }
  .card-text{
    height: 70px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

