<template>
  <div class="w-75 mx-auto">
    <div class="row row-cols-2  row-cols-lg-4">
      <div class="px-3" v-for="(game, index) in games" :key="index">
        <div class="card px-0 shadow hvr-grow-shadow mb-4 mb-lg-0" >
          <img src="@/assets/img/background01.webp" alt="game" class="card-img-top"  height="130px" >
          <div class="card-body p-0 bg-white ">
            <div class="d-grid gap-2">
              <button class="btn btn-dark rounded-0 py-md-1" type="button">play now</button>
            </div>
          </div>
        </div><!-- card ends here -->
      </div>
    </div><!-- row ends here -->
  </div><!-- container ends here -->
</template>

<script>
  export default{
    name: 'game-card',
    data() {
      return {
        games:[ {name: 'one'}, {name: 'two'}, {name: 'three'}, {name: 'four'}]
      }
    }
  }
</script>