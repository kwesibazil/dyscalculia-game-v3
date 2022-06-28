<template>
  <div class="d-flex flex-column h-100 px-3">
    <div class="">
      <h1 class="fs-5">TO do HEADING Games</h1>
    </div>
    <section class="flex-grow-1 d-flex align-items-center overflow-auto ">
      <GameCard />
    </section>
  </div>
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
  section::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  section::-webkit-scrollbar-track {
    background: rgb(187, 185, 185); ;
  }

  /* Handle*/
  section::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb:hover {
    background: var(--bs-primary);
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
