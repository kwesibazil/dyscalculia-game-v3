<template>
  <div class="container m-0 me-sm-3  p-0">
    <div class="circular-progress" id="progressBar" ref="progressBar">
      <div class="progress-value">{{getEndValue}}%</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'
  export default{
    name: 'progress-bar',
    data(){
      return{
        speed:  150
      }
    },
    computed: mapGetters(['getEndValue']),
    mounted(){ 
      this.render() 
    },

    beforeUpdate(){
      this.updateProgress()
      this.render()
    },

    beforeUnmount(){        //reset answers
      for (const key in this.$store.state.screener.answers) 
          delete  this.$store.state.screener.answers[key];

      this.$store.state.screener.progressBar.progressValue = this.$store.state.screener.progressBar.endValue = 0
    },

    methods:
    {
      updateProgress(){
        this.$store.commit('progress')
      },

      async render(){
        const progressBar = this.$refs.progressBar
        const progress = setInterval(() =>{
          progressBar.style.background = `conic-gradient(
            #FF9601 ${this.$store.state.screener.progressBar.progressValue * 3.6}deg,
            #e9ecef ${this.$store.state.screener.progressBar.progressValue * 3.6}deg
          )`
          
          if(this.$store.state.screener.progressBar.progressValue === this.$store.state.screener.progressBar.endValue)
            clearInterval(progress)
        }, this.speed)
      }
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
      height: 90px;
      width: 90px;
    }.circular-progress{
      width: 80px;
      height: 80px;
    }.progress-value{
      font-size: 16px;
      position: relative;
    }
  }  

</style>
