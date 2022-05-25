<template>
  <swiper class="px-4 py-2" :modules="modules" :slidesPerView="2.5" :spaceBetween="30"  
    :slideToClickedSlide = "true" 
    :pagination="{dynamicBullets: true, clickable: true,}"
    :breakpoints="{
      '0': { slidesPerView: 1, spaceBetween: 10,},
      '576': {slidesPerView: 1.5,spaceBetween: 10,},
      '768': { slidesPerView: 1.5, spaceBetween: 20,},
      '992': { slidesPerView: 2.5, spaceBetween: 20,},
    }">
    <swiper-slide v-for="(slideContent, index) in getCards('testimonies').slice(0, 6)" :key="index" :virtualIndex="index">
        <div class="card border border-2 shadow mb-5" :class="slideContent.bootstrap">
          <img :src="slideContent.urlToImg"  class="card-img" alt="testimony"  style="max-height: 200px; min-height: 190px;" >
          <div class="card-img-overlay">
            <div class="d-flex flex-column justify-content-center px-4">
              <span class="align-self-end fs-8">{{slideContent.gender}} {{slideContent.age}}</span>
              <p class="align-self-center card-text fst-italic fs-8 my-2">{{slideContent.body}}</p>
              <span class="align-self-end fw-bold fs-7">{{slideContent.author}}</span>
            </div>
            <a :href="slideContent.urlToArticle" target="_blank" class="btn btn-sm btn-light">view story</a> 
          </div>
        </div>  
    </swiper-slide>
  </swiper>
</template>

<!-- temp="slideContent.pathToImg" -->

<!-- @/assets/img/card00.jpg
@/assets/img/testimonial-light.png -->


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
    max-height: 250px;
  }
  .card-img{
    /* filter: blur(1.5px); */
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

