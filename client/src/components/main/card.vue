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
          <img :src="slideContent.img" class="card-img" alt="..."  style="max-height: 220px; min-height: 190px;" >
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


<!-- <template>
  <div>
    <h2 class="news__header d-md-none">Top Stories</h2>
    <div class="d-flex flex-column flex-md-row flex-md-wrap">
      <div v-for="(article, index) in getNews('crime').slice(start, end)" :key="index" class="col-12 col-md-6 col-lg-4">
        <div ref="index" class="news__card shadow">
          <div class="news__img col-3 col-md-12 me-2 me-md-0">
            <img :src="article.urlToImage" :alt="article.title" >
          </div>
          <div class="news__body col-9 col-md-12">
            <h5 class="news__title">{{article.title}}</h5>
            <p class="news__text m-0">{{article.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <router-link type="button" class="mx-auto btn btn-link" to="/news">View more</router-link>
    </div>  
  </div>
</template> -->