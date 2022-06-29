<template>
  <div class="d-flex flex-column h-100 px-3">
    
    <div class="shadow-sm bg-white mb-3">
      <div class="d-flex flex-column justify-content-center align-items-center mx-auto col col-sm-10 p-2 p-sm-3">
        <h1 class="fs-5 fw-bold text-center">Dyscalculic Games</h1>
        <p class="col col-sm-10 px-2 px-sm-0 mb-0 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis iusto, enim iure nisi minus sunt ea expedita eius praesentium .</p>
      </div>
    </div>
    
    <section class="flex-grow-1 py-2 d-flex flex-column overflow-hidden">
      <p class="text-muted px-2 text-center mb-3">Below are some sample games design to teach money management to dyscalculic adults</p>
      <div class="mt-sm-3 pt-2  games-container overflow-auto flex-grow-1 ">
        <GameCard />
      </div>
    </section>

  </div><!-- root container ends here -->
</template>


<script>
  import GameCard from '@/components/cards/game-card.vue'
  export default {
    name: 'games-layout',
    components: {
      GameCard,
    }
  }
</script>


<style scoped>

    /* width */
  .games-container::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  .games-container::-webkit-scrollbar-track {
    background: rgb(187, 185, 185); ;
  }

  /* Handle*/
  .games-container::-webkit-scrollbar-thumb, .games-container::-webkit-scrollbar-thumb:hover {
    background: var(--bs-warning);
  }
</style>




<!-- 
<template>
  <div class="w-75 mx-auto">
    <div  id="games" ref="games" class="row row-cols-2 row-cols-lg-4">
      <div class="px-3" v-for="(game, index) in getRootState('games').slice(0, 4)" :key="index">
        <div class="card px-0 shadow hvr-grow-shadow mb-4 mb-lg-0" >
          <img :src="game.urlToImg" alt="game" class="card-img-top"  style="height: 130px;">
          <div class="card-body p-0 bg-white ">
            <div class="d-grid gap-2">
              <button @click="startGame" :data-gameTitle="game.title" class="btn btn-dark rounded-0 py-md-1" type="button">play now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 -->
