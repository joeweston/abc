<template>
  <div id="skill-tree-component">
    <div id="skill-nav">
      <button @click="changeMenu('BLUE')" :disabled="currentMenu==='BLUE'"
      :data-active="currentMenu==='BLUE'"
      >Blue</button>
      <button @click="changeMenu('GREEN')" :disabled="currentMenu==='GREEN'"
      :data-active="currentMenu==='GREEN'"
      >Green</button>
      <button @click="changeMenu('ORANGE')" :disabled="currentMenu==='ORANGE'"
      :data-active="currentMenu==='ORANGE'"
      >Orange</button>
    </div>
    <div id="skill-page-holder">
      <div id="skill-tree-holder">
       <div class="tree blue" v-if="currentMenu==='BLUE'">

         <div class="skill" :style="getSkillCss.extraHeart"
         @click="selectSkill('extraHeart')"
         :data-selected="selectedSkill === 'extraHeart'"
         ></div>

         <div class="blank"></div>
         
         <div class="skill" :style="getSkillCss.longerLegs"
         @click="selectSkill('longerLegs')"
         :data-selected="selectedSkill === 'longerLegs'"
         ></div>

         <div class="blank"></div>

         <div class="skill" :style="getSkillCss.lobsterGreed"
         @click="selectSkill('lobsterGreed')"
         :data-selected="selectedSkill === 'lobsterGreed'"
         ></div>

         <!--2 -->
         <div class="connector-corner connector-corner-left"></div>
         <div class="connector-corner connector-corner-both-top"></div>
         <div class="connector-corner connector-corner-right"></div>
         <div class="blank"></div>
         <div class="connector-straight"></div>
         <!--3 -->
         <div class="connector-corner connector-corner-left-top"></div>

         <div class="skill" :style="getSkillCss.extraBeef"
         @click="selectSkill('extraBeef')"
         :data-selected="selectedSkill === 'extraBeef'"
         ></div>

         <div class="blank"></div>
         <div class="blank"></div>
         
         <div class="skill" :style="getSkillCss.superiorVision"
         @click="selectSkill('superiorVision')"
         :data-selected="selectedSkill === 'superiorVision'"
         ></div>         

         <!--4 -->
         <div class="connector-straight"></div>
         <div class="connector-corner connector-corner-left"></div>
         <div class="connector-flat"></div>
         <div class="connector-corner connector-corner-both-top"></div>
         <div class="connector-corner connector-corner-right"></div>
         <!--5 -->
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="blank"></div>
         <div class="skill"></div>
         <div class="blank"></div>
         <!-- -->
         <div class="connector-corner connector-corner-left-top"></div>
         <div class="connector-flat"></div>
         <div class="connector-corner connector-corner-both-top"></div>
         <div class="connector-corner connector-corner-both"></div>
         <div class="connector-corner connector-corner-right-top"></div>
         <!-- -->
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="skill"></div>
       </div>

       <div class="tree green" v-else-if="currentMenu==='GREEN'">
         
         <div class="skill" :style="getSkillCss.centepedeForcipules"
         @click="selectSkill('centepedeForcipules')"
         :data-selected="selectedSkill === 'centepedeForcipules'"
         ></div>

         <div class="blank"></div>

         <div class="skill" :style="getSkillCss.antigens"
         @click="selectSkill('antigens')"
         :data-selected="selectedSkill === 'antigens'"
         ></div>

         <div class="blank"></div>

         <div class="skill" :style="getSkillCss.superiorVision"
         @click="selectSkill('superiorVision')"
         :data-selected="selectedSkill === 'superiorVision'"
         ></div>

         <!--2 -->
         <div class="connector-straight"></div>
         <div class="blank"></div>
         <div class="connector-straight"></div>
         <div class="blank"></div>
         <div class="connector-straight"></div>
         <!--3 -->

         <div class="skill" :style="getSkillCss.necrosis"
         @click="selectSkill('necrosis')"
         :data-selected="selectedSkill === 'necrosis'"
         ></div>

         <div class="blank"></div>

         <div class="skill" :style="getSkillCss.formicAcid"
         @click="selectSkill('formicAcid')"
         :data-selected="selectedSkill === 'formicAcid'"
         ></div>

         <div class="blank"></div>
         <div class="connector-straight"></div>
         <!--4 -->
         <div class="connector-corner connector-corner-left"></div>
         <div class="connector-corner connector-corner-both-top"></div>
         <div class="connector-corner connector-corner-right"></div>
         <div class="blank"></div>
         <div class="connector-straight"></div>
         <!--5 -->
         <div class="connector-corner connector-corner-left-top"></div>
         
         <div class="skill" :style="getSkillCss.antigens"
         @click="selectSkill('antigens')"
         :data-selected="selectedSkill === 'antigens'"
         ></div>

         <div class="connector-flat"></div>
         <div class="connector-corner connector-corner-both-top"></div>
         <div class="skill"></div>
         <!-- -->
         <div class="connector-straight"></div>
         <div class="blank"></div>
         <div class="connector-corner connector-corner-left-top"></div>
         <div class="connector-corner connector-corner-both"></div>
         <div class="connector-corner connector-corner-right-top"></div>
         <!-- -->
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="skill"></div>
       </div>

       <div class="tree orange" v-else-if="currentMenu==='ORANGE'">
         
         <div class="skill" :style="getSkillCss.joust"
         @click="selectSkill('joust')"
         :data-selected="selectedSkill === 'joust'"
         ></div>

         <div class="blank"></div>

         <div class="skill" :style="getSkillCss.antiJoust"
         @click="selectSkill('antiJoust')"
         :data-selected="selectedSkill === 'antiJoust'"
         ></div>

         <div class="blank"></div>

         <div class="skill" :style="getSkillCss.shrimpWisdom"
         @click="selectSkill('shrimpWisdom')"
         :data-selected="selectedSkill === 'shrimpWisdom'"
         ></div>

         


         <!--2 -->
         <div class="connector-straight"></div>
         <div class="blank"></div>
         <div class="connector-straight"></div>
         <div class="blank"></div>
         <div class="connector-straight"></div>
         <!--3 -->
         <div class="connector-straight"></div>
         <div class="blank"></div>
         <div class="skill"></div>
         <div class="connector-corner connector-corner-left-top"></div>
         <div class="skill"></div>
         <!--4 -->
         <div class="connector-straight"></div>
         <div class="blank"></div>
         <div class="connector-corner connector-corner-left-top"></div>
         <div class="connector-corner connector-corner-right"></div>
         <div class="connector-straight"></div>
         <!--5 -->
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="skill"></div>
         <!-- -->
         <div class="connector-corner connector-corner-left"></div>
         <div class="connector-corner connector-corner-both-top"></div>
         <div class="connector-corner connector-corner-right"></div>
         <div class="blank"></div>
         <div class="connector-straight"></div>
         <!-- -->
         <div class="blank"></div>
         <div class="skill"></div>
         <div class="blank"></div>
         <div class="blank"></div>
         <div class="skill"></div>
       </div>
     </div>
     <div id="skill-description-panel" v-if="selectedSkill!=='none'">
      <div id="skill-description-text">
        <h4>{{getSkillText}}</h4>
        <p v-if="getSkillLevel !== -1">Level: {{getSkillLevel}} / {{getMax}}</p>
        <p>{{getSkillDesc}}</p>
        <p class="prerequisites" v-if="!hasPrerequisites">Previous Upgrades Needed</p>
      </div>
      <div id="panel-button">
        <button @click="getSkill(selectedSkill)"
        :disabled="!canBuy"
        >{{isMaxed? "MAXED":canAfford?"Buy Skill": "Can't Afford"}}</button>
        <p v-if="getCost">Cost: {{getCost}} SP</p>
        <p v-else>Cost: N/A</p>
      </div>
    </div>
    <div id="skill-description-panel" v-else>
      <div id="skill-description-text">
        <h4>Description</h4>
      </div>
      <div id="panel-button">
        <button disabled>n/a</button>
        <p>Cost: N/A</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import mutations from "../mutations"
  import getters from "../getters"
  export default {
    data(){
      return {
        currentMenu: "BLUE",
        selectedSkill: "none",
      }
    },
    methods:{
      changeMenu(name){
        this.currentMenu = name;
      },
      getSkill(skillName){
        mutations.getSkill(skillName);
      },
      selectSkill(skillName){
        this.selectedSkill = skillName;
      },
    },
    computed:{
      getSkillText(){
        return getters.getSkillInfo(this.selectedSkill).text
      },
      getSkillLevel(){
        return getters.getSkillInfo(this.selectedSkill).level
      },
      getSkillDesc(){
        return getters.getSkillInfo(this.selectedSkill).desc
      },
      canAfford(){
        return getters.getSkillInfo(this.selectedSkill).canAfford
      },
      getPrerequisites(){
        return getters.getSkillInfo(this.selectedSkill).prerequisites;
      },
      hasPrerequisites(){
        return getters.getSkillInfo(this.selectedSkill).hasPrerequisites;
      },
      canBuy(){
        return getters.getSkillInfo(this.selectedSkill).canBuy;
      },
      isMaxed(){
        return getters.getSkillInfo(this.selectedSkill).isMaxed;
      },
      getCost(){
        return getters.getSkillInfo(this.selectedSkill).cost;
      },
      getSkillCss(){
        return getters.getSkillCss();
      },
      getMax(){
        return getters.getSkillInfo(this.selectedSkill).max;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.skill{
  background-position: 0 0;
  background-size: contain;
  outline: 4px solid black;
  cursor: pointer;
}
.skill[data-selected=true]{
  box-shadow: 0px 0px 0px 6px rgba(250,250,250,1),0px 0px 0px 8px black;

}


#skill-tree-component{
  margin-left: 20px;
  padding: 10px;
  width: 700px;
  outline: 2px solid black;
  min-height: 510px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
}
#skill-page-holder{
  display: flex;
  justify-content: space-around;
}
#skill-nav{
  margin-bottom: 20px;
  button{
    border-left: none;
    &:first-child{
      border-left: 2px solid black
    }
  }
}
#skill-tree-holder{
  
}
.tree{
  width: 260px;
  padding: 5px;
  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: 50px;
  grid-template-columns: 50px 50px 50px 50px 50px;
  div{
    height: 50px;
    width: 50px;
  }
  .blank{
    background: none;
  }
  *:not(.skill):not(.blank),*:before{
    z-index: -2;
  }
  .connector-straight{
    justify-self: center;
    height: 100%;
    width: 10px;
  }
  .connector-flat{
    align-self: center;
    height: 10px;
    width: 100%;
  }
  .connector-corner{
    justify-self: center;
    position: relative;
    &::before{
      position: absolute;
      content: "";
    }
  }
  .connector-corner-right{
    height: 30px;
    width: 10px;
    position: relative;
    &::before{
      height: 10px;
      width: 25px;
      left: -20px;
      top: 20px;
    }
  }
  .connector-corner-right-top{
    margin-top: 20px;
    height: 30px;
    width: 10px;
    position: relative;
    &::before{
      height: 10px;
      width: 25px;
      left: -20px;
    }
  }
  .connector-corner-left{
    height: 30px;
    width: 10px;
    position: relative;
    &::before{
      height: 10px;
      width: 25px;
      right: -20px;
      top: 20px;
    }
  }
  .connector-corner-left-top{
    margin-top: 20px;
    height: 30px;
    width: 10px;
    position: relative;
    &::before{
      height: 10px;
      width: 25px;
      right: -20px;
    }
  }
  .connector-corner-both{
    height: 30px;
    width: 10px;
    position: relative;
    &::before{
      height: 10px;
      width: 50px;
      top: 20px;
      left: -20px;
    }
  }
  .connector-corner-both-top{
    margin-top: 20px;
    height: 30px;
    width: 10px;
    position: relative;
    &::before{
      height: 10px;
      width: 50px;
      left: -20px;
    }
  }
}

.blue  *:not(.skill):not(.blank),.blue *:before{
  background-color: rgb(160,220,255);
}
.green  *:not(.skill):not(.blank),.green *:before{
  background-color: rgb(200,250,200);

}
.orange  *:not(.skill):not(.blank),.orange *:before{
  background-color: rgb(250,200,170);
}


#skill-description-panel{
  outline: 2px solid black;
}
#skill-description-text{
  diplay: flex;
  padding: 10px;
  flex-direction: column;
  width: 350px;
  min-height: 368px;
}
.prerequisites{
  color: red;
}
#panel-button{
  display: flex;
  justify-content: space-between;
  >*{
    width: 50%;
    border-top: 2px solid black;

  }
  button{
    border-left: none;
    border-bottom: none;
  }
}










</style>