<template>
  <div id="map-component">
    <div id="map-area">
      <div id="fight-area" v-if="isFightActive">
        <fight-component></fight-component>
      </div>
      <intro v-show="currentArea==='intro'"></intro>
      <ant-land v-show="currentArea==='antLand'"></ant-land>
      <skill-cave v-show="currentArea==='skillCave'"></skill-cave>
      <skill-cave-inner v-show="currentArea==='skillCaveInner'"></skill-cave-inner>
      <ocean v-show="currentArea==='ocean'"></ocean>
      <event-horizon v-show="currentArea==='eventHorizon'"></event-horizon>
      <miasmo v-show="currentArea==='miasmo'"></miasmo>
    </div>


  </div>
</template>

<script>
import store from "../store";
import getters from "../getters";

import FightComponent from "./FightComponent.vue";

import Intro from "./mapAreas/Intro.vue";
import AntLand from "./mapAreas/AntLand.vue";
import SkillCave from "./mapAreas/SkillCave.vue";
import Ocean from "./mapAreas/Ocean.vue";
import EventHorizon from "./mapAreas/EventHorizon.vue";
import SkillCaveInner from "./mapAreas/SkillCaveInner.vue";
import Miasmo from "./mapAreas/Miasmo.vue";


export default {
  components:{
    Intro, AntLand, SkillCave, Ocean, EventHorizon,
    SkillCaveInner, Miasmo,
    FightComponent
  },
  computed:{
    currentArea(){
      return store.currentArea;
    },
    isFightActive: getters.isFightActive,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


#map-component{

  .map-area{
    img{
      display: block;
      margin: 0 auto;
      outline: 2px solid black;
    }
    map{
      area{
        &:focus{
         outline: none;
        }
        &:hover{
          cursor: pointer;
        }
        &[data-working=false]{
          cursor: not-allowed;
        }
      }
    }
    .events{
      width: 700px;
      margin: 5px auto;
      display: flex;
      justify-content: space-between;
      .fight{
        background-color:  rgb(233,190,160);
      }
      .talk{
        background-color: rgb(190, 233, 160);
      }
      .leave{
        background-color: rgb(160,190,233)
      }
      .important{
        background-color: rgb(233,233,160);
      }
      .danger{
        background-color: black;
        color: red;
        border:2px solid red;
      }
    }
  }
  .alt-text{
    height: 400px;
    width: 700px;
    padding: 10px;
    outline: 2px solid black;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .dialog{
    position: absolute;
    left: 20px;


    background-color: rgba(255,255,255, 95%);
    height: 400px;
    width: 700px;
    padding: 10px;
    outline: 2px solid black;
    margin: 0 auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
      line-height: 35px;
      font-size: 20px;
    }
    .you{
      padding-left: 30px;
      &:before{
        content: "You:  "
      }
    }
    .them{

    }
  }
  .area-text{
    height: 110px;
     .text-holder{
      display: flex;
      justify-content: center;
      height: 80px;
      flex-direction: column;
    }
  }
}
#map-area{

 position: relative;

}
#fight-area{
  position: absolute;
}















</style>