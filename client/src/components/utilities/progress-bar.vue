<template>
  <div class="container m-0 me-sm-3  p-0">
    <div class="circular-progress" id="progressBar" ref="progressBar">
      <div class="progress-value">0%</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'progress-bar',
    data(){
      return{
        speed:  40,
        endValue: this.$store.state.screener.endValue,
        progressValue: this.$store.state.screener.progressValue
      }
    },
    mounted(){
      const progressBar = this.$refs.progressBar
      const value = progressBar.firstElementChild

      const progress = setInterval(()=>{
        this.progressValue++
        value.textContent = `${this.progressValue}%`
  
        progressBar.style.background = `conic-gradient(
          #FF9601 ${this.progressValue * 3.6}deg,
          #e9ecef ${this.progressValue * 3.6}deg
        )`
        
        if(this.progressValue === this.endValue)
          clearInterval(progress)
      }, this.speed)
    }
  }
</script>

<style scoped>
  .container{
    display: grid;
    place-items: center;
    border-radius: 8px;
  }.circular-progress{
    display: grid;
    border-radius: 50%;
    position: relative;
    place-items: center;
    background: var(--bs-warning);
  }.circular-progress::before{
    width: 84%;
    height: 84%;
    content: "";
    border-radius: 50%;
    position: absolute;
    background-color: var(--bs-white);
  }

  @media (max-width:575px){
    .container{
      width: 80px;
      height: 80px;
    }.circular-progress{
      width: 70px;
      height: 70px;
    }.progress-value{
      font-size: 12px;
      position: relative;
    }
  }

 @media (min-width:576px){
    .container{
      height: 100px;
      width: 100px;
    }.circular-progress{
      width: 90px;
      height: 90px;
    }.progress-value{
      font-size: 16px;
      position: relative;
    }
  }  

    @media (min-width:767px){
    .container{
      height: 120px;
      width: 120px;
    }.circular-progress{
      width: 110px;
      height: 110px;
    }.progress-value{
      font-size: 16px;
      position: relative;
    }
  }  
/* 
  @media (min-width:767px){
    .container{
      height: 160px;
      width: 160px;
    }.circular-progress{
      width: 140px;
      height: 140px;
    }.progress-value{
      font-size: 16px;
      position: relative;
    }
  }   */
</style>
