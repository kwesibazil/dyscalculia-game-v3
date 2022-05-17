<template>
  <div class="container h-100 bg-dark">
    <div class="d-flex flex-column h-100">
      <div class="d-flex justify-content-end my-3">
        <router-link to="signup"  type="button" class="btn btn-outline-primary me-3">Sign up</router-link>
        <router-link to="signin" class="btn btn-primary text-white">Sign in</router-link>
      </div>
      <div class="text-center my-auto my-lg-5">
        <div>
          <img src="@/assets/img/lg-logo.png" class="img-fluid mx-auto landing__img" alt="dyscalculia">
        </div>
        <p class="overflow-hidden my-3 mx-auto landing__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores odio, fugiat vitae vero suscipit asperiores cum perspiciatis illum, quae explicabo corporis ex! Sunt dolor illo ullam ratione aut? Temporibus!</p>
        <button type="button" class="btn btn-primary my-4 text-white ">Learn more</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .btn-outline-primary:hover{
    color: #fff;
  }

  .landing{
    /* height: 100%; */
    margin: 0 auto;
    text-align: center;
  }.landing__img{
    max-width: 180px;
  }.landing__p{
    max-height: 168px;
    width: 90%
  }


  @media (min-width:576px){
    .landing__img{
    /* max-width: 150px; */
    }.landing__p{
      max-height: 145px; 
      width: 85%;
    }
}
</style>