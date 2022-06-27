<template>
  <div class="py-1">
    <div class="d-flex justify-content-center  ">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="62" viewBox="0 0 52 62">
          <g id="computation-skills" transform="translate(-377.485 -353)">
            <text id="Computation_skills" data-name="Computation skills" transform="translate(403.485 402)" fill="rgba(0,0,0,1)" font-size="9" font-family="Helvetica"><tspan x="-25.515" y="0">Computation</tspan><tspan x="-11" y="11" xml:space="preserve"> skills</tspan></text>
            <g id="Group_130" data-name="Group 130" transform="translate(1.485)">
              <g id="shape" transform="translate(385 353)">
                <path id="Path_98" data-name="Path 98" d="M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667h0Z" transform="translate(0 0)" fill="none" class="fill-primary"/>
                <path id="Path_99" data-name="Path 99" d="M17.5,33.678l16.333-8.711V10.033L17.5,1.322,1.167,10.033V24.967L17.5,33.678M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667Z" transform="translate(0 0)" fill="#3db2ff"/>
                <path id="Path_100" data-name="Path 100" d="M8.2,0H0" transform="translate(34.8 16.5)" fill="none" stroke="#3db2ff" stroke-width="1"/>
              </g>
              <text id="_1" data-name="1" transform="translate(399.997 374.632)" fill="#3db2ff" class="fill-white"   font-size="9" font-family="Helvetica"><tspan x="0" y="0">1</tspan></text>
            </g>
          </g>               
        </svg>
      </div>
      <div class="col-2 p-0"><hr></div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="64" viewBox="0 0 36 64">
          <g id="math-fluency" transform="translate(-559.985 -353)">
            <text id="Math_Fluency" data-name="Math Fluency" transform="translate(577.985 402)" fill="rgba(33,37,41,1)" font-size="10" font-family="Helvetica"><tspan x="-11.116" y="0">Math</tspan><tspan x="-17.507" y="12">Fluency</tspan></text>
            <g id="Group_131" data-name="Group 131" transform="translate(0.485)">
              <g id="shape" transform="translate(560.5 353)">
                <path id="Path_96" data-name="Path 96" d="M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667h0Z" transform="translate(0 0)" fill="none" :class="{'fill-primary': getQuizValue(this.mathFluency)}"/>
                <path id="Path_97" data-name="Path 97" d="M17.5,33.678l16.333-8.711V10.033L17.5,1.322,1.167,10.033V24.967L17.5,33.678M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667Z" transform="translate(0 0)" fill="#3db2ff"/>
              </g>
              <text id="_2" data-name="2" transform="translate(575.497 373.368)"  fill="#3db2ff" :class="{'fill-white': getQuizValue(this.mathFluency)}" font-size="9" font-family="Helvetica"><tspan x="0" y="0">2</tspan></text>
            </g>
          </g>
        </svg>
      </div>
      <div class="col-2 p-0"><hr></div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="63" viewBox="0 0 35 63">
        <g id="mental-math" transform="translate(-734.485 -353)">
          <g id="Group_132" data-name="Group 132" transform="translate(-5.515)">
            <g id="shape" transform="translate(740 353)">
              <path id="Path_94" data-name="Path 94" d="M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667h0Z" transform="translate(0 0)" fill="none" :class="{'fill-primary': getQuizValue(this.mentalMath)}"/>
              <path id="Path_95" data-name="Path 95" d="M17.5,33.678l16.333-8.711V10.033L17.5,1.322,1.167,10.033V24.967L17.5,33.678M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667Z" transform="translate(0 0)" fill="#3db2ff"/>
            </g>
            <text id="_3" data-name="3" transform="translate(755 374)"  fill="#3db2ff" :class="{'fill-white': getQuizValue(this.mentalMath)}" font-size="9" font-family="Helvetica"><tspan x="0" y="0">3</tspan></text>
          </g>
          <text id="Mental_Math" data-name="Mental Math" transform="translate(752.485 402)" fill="rgba(33,37,41, 1)" font-size="10" font-family="Helvetica"><tspan x="-16.396" y="0">Mental </tspan><tspan x="-11.116" y="12">Math</tspan></text>
        </g>
      </svg>          
      </div>      
      <div class="col-2 p-0"><hr></div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="47.2" height="63" viewBox="0 0 47.2 63">
          <g id="applied-problems" transform="translate(-951.285 -353)">
            <text id="Applied_Problems" data-name="Applied Problems" transform="translate(976.485 402)" fill="rgba(0,0,0,1)" font-size="10" font-family="Helvetica"><tspan x="-18.069" y="0">Applied </tspan><tspan x="-21.118" y="12">Problems</tspan></text>
            <g id="Group_133" data-name="Group 133" transform="translate(32.485)">
              <g id="shape" transform="translate(927 353)">
                <path id="Path_92" data-name="Path 92" d="M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667h0Z" transform="translate(0 0)" fill="none" :class="{'fill-primary': getQuizValue(this.appliedProblems)}"/>
                <path id="Path_93" data-name="Path 93" d="M17.5,33.678l16.333-8.711V10.033L17.5,1.322,1.167,10.033V24.967L17.5,33.678M17.5,35h0L0,25.667V9.333L17.5,0,35,9.333V25.667Z" transform="translate(0 0)" fill="#3db2ff"/>
                <path id="Path_100" data-name="Path 100" d="M8.2,0H0" transform="translate(-8.2 16.5)" fill="none" stroke="#3db2ff" stroke-width="1"/>
              </g>
              <text id="_4" data-name="4" transform="translate(942 374)"  fill="#3db2ff" :class="{'fill-white': getQuizValue(this.appliedProblems)}" font-size="9" font-family="Helvetica"><tspan x="0" y="0">4</tspan></text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div><!-- root element ends here -->
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    name: 'aptitude-progress-bar',
    computed: mapGetters(["getQuizValue"]),
    data(){
      return {
        mathFluency: {object:'completed', property:'mathFluency'},
        mentalMath: {object:'completed', property:'mentalMath'},
        appliedProblems: {object:'completed', property:'appliedProblems'}
      }
    }
  }
</script> 



<style scoped>
  span{
    width: 65px;
  }

  hr {
  height: 1px;
  border-width:0;
  background-color: var(--bs-primary);
  opacity: 1;
}
</style>


